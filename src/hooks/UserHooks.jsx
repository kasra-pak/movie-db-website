import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "@/firebase";

function useCurrentUserData() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [state, setState] = useState("idle");

  useEffect(() => {
    if (user) {
      setState("loading");
      const unsubscribe = onSnapshot(
        doc(db, "users", user.uid),
        doc => {
          setUserData(doc.data());
          setState("success");
        },
        error => {
          console.log(error);
          setUserData(null);
          setState("rejected");
        }
      );

      return () => {
        unsubscribe();
      };
    } else {
      setUserData(null);
      setState("idle");
    }
  }, [user]);

  return [userData, state];
}

export { useCurrentUserData };
