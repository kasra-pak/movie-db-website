import { useState, useEffect } from "react";
import {
  query,
  getDocs,
  doc,
  collection,
  where,
  updateDoc,
} from "firebase/firestore";
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

  useEffect(() => {
    if (Object.keys(userData).length) {
      updateDoc(doc(db, "users", user.uid), "watchlist", userData.watchlist);
    }
  }, [userData]);

  return [userData, setUserData];
}

export { useCurrentUserData };
