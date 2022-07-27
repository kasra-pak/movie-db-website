import { useState, useEffect } from "react";
import { query, getDocs, collection, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, auth } from "../firebase";

function useCurrentUserData() {
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "users"), where("uid", "==", user.uid));

      getDocs(q).then(doc => setUserData(doc.docs[0].data()));
    } else {
      setUserData({});
    }
  }, [user]);

  return [userData, setUserData];
}

export { useCurrentUserData };
