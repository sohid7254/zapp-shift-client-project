import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';



const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    
    // email registeration
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    // Email Sign in
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google Sign In
    const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // signOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update User profile
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const handleResetPass = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle,
        logOut,
        updateUserProfile,
        handleResetPass
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;