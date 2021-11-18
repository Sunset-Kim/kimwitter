import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};
const fbase = initializeApp(firebaseConfig);

export const authService = getAuth();
export const signIn = signInWithEmailAndPassword;
export const createUser = createUserWithEmailAndPassword;
export const onAuthChanged = onAuthStateChanged;
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
export const logOut = signOut;
export const fdb = getFirestore();