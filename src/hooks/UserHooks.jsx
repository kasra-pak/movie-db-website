import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";

function useCurrentUserData() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), doc => {
        setUserData(() => doc.data());
      });

      return () => {
        unsubscribe();
      };
    } else {
      setUserData({});
    }
  }, [user]);

  return [userData];
}

export { useCurrentUserData };
