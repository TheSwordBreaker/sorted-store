import { initializeApp, getApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, updateProfile, updateEmail } from "firebase/auth";
import type { IPerson } from "../component/cart/AddPersonalDetails";
import { GlobalError } from "./handleError";
import router from "next/router";
import type { IAddress } from "../component/cart/AddAddress";
const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  // measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
};
// if a Firebase instance doesn't exist, create one

const app = initializeApp(FirebaseCredentials);
const auth = getAuth(app);
const db = getFirestore(app);

export const updatePersonal = async (x: IPerson) => {
  if (auth.currentUser === null) return false;

  await updateProfile(auth.currentUser, {
    displayName: x.fullName,
    photoURL: "https://example.com/jane-q-user/profile.jpg",
  }).catch(GlobalError);

  const data = { person: x };
  const opt = { merge: true };
  const id = doc(db, "users", auth.currentUser.uid);

  const docRef = await setDoc(id, data, opt);

  console.log("Document Person written with ID: ", docRef);
};

export const updateAddress = async (x: IAddress) => {
  if (auth.currentUser === null) return false;

  const data = { address: x };
  const opt = { merge: true };
  const id = doc(db, "users", auth.currentUser.uid);

  const docRef = await setDoc(id, data, opt);

  console.log("Document Address written with ID: ", docRef);
};

export const getPersonal = async () => {
  if (auth.currentUser === null) return null;
  const person = await getDoc(doc(db, "users", auth.currentUser.uid));

  if (!person.exists()) return null;
  const result = person.data();

  console.log("result", result);
  return result;
};

export default auth;
export { updateProfile, updateEmail, db };
