/** @format */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGMOEH7GCoe8UtVAs26HCUVyN1CgV2MpQ",
  authDomain: "ig-clone-5e764.firebaseapp.com",
  projectId: "ig-clone-5e764",
  storageBucket: "ig-clone-5e764.appspot.com",
  messagingSenderId: "222995643078",
  appId: "1:222995643078:web:0f414f47abce16e0f075c7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };
