import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user,setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        signOut(auth)
        .then(()=>{
            setUser({})
        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
            }
        })
    },[]);
    return{
        signInUsingGoogle,
        user,
        logOut
    }
}

export default useFirebase;