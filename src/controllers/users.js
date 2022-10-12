import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./app";

export const registerWithEmailAndPassword = async ({ email, password }) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
};
