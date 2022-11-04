import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { auth } from "./app";

export const registerWithEmailAndPassword = async ({ email, password, name }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password);
  if (user.uid) {
    await addUserName(name);
  }
  return user;
};

export const sendVerificationEmail = async () => {
  const response = await sendEmailVerification(auth.currentUser);
  return response;
};

export const addUserName = async (name) => {
  const response = await updateProfile(auth.currentUser, {
    displayName: name,
  });
  return response;
};

export const changeUserName = (name) => {};

export const loginWithEmailAndPassword = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const getSignedInUser = (callback) => {
  auth.onAuthStateChanged((user) => callback(user));
};

export const getUserDetails = () => {
  const { currentUser } = auth;
  if (!currentUser) return null;
  return {
    userID: currentUser.uid,
    email: currentUser.email,
    name: currentUser?.displayName,
    verified: currentUser.emailVerified,
  };
};
