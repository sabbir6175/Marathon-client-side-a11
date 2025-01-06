import React, { useEffect, useState } from 'react';

import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';

import AuthContext from './AuthContext';
import auth from '../../firebase/Firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user
    const createUser =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //updateUserProfile
    const updateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    // // sign in user
    const signInUser = (email , password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // //sing in with google 
    const singWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    // sing out user
    const singOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])



    const authInfo = {
        user,
        setUser, 
        loading,
        createUser,
        updateUserProfile,
        signInUser,
        singOutUser,
        singWithGoogle
    }



    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;