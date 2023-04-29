import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
 /*  const user = { displayName: "Nil Oporajita" }; */

 const [user, setUser] = useState(null);

 const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
 };

 const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
 }

 const authInfo = {
    user,
    createUser,
    signIn
 }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
