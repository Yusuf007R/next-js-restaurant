import { browserSessionPersistence, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithPopup, TwitterAuthProvider, User } from '@firebase/auth';
import React, { useState } from 'react'



export default function useFirebaseAuth() {
  const [user, setUser] = useState<User>()



  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // ...
    } else {
      
    }
  });


  const SignIn = (type: loginType)=>{
   
    
  
  }

 

  return {user, SignIn}
}
