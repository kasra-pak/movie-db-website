import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  updateProfile,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlstpW-BZ5lT3ry_hyYwZyW4hcVHdu5Sg",
  authDomain: "movie-database-website-984d7.firebaseapp.com",
  projectId: "movie-database-website-984d7",
  storageBucket: "movie-database-website-984d7.appspot.com",
  messagingSenderId: "335907187404",
  appId: "1:335907187404:web:372eb8c579a8564e973069",
  measurementId: "G-HE79DBQYSH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function registerUser(name, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      updateProfile(userCredential.user, {
        displayName: name,
      });

      const user = userCredential.user;

      setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        email,
        watchlist: [],
      });
    })
    .catch(err => {
      console.error(err);
    });
}

async function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password).catch(err => {
    console.error(err);
  });
}

function logOutUser() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
}

export { app, auth, db, registerUser, logInUser, logOutUser };
