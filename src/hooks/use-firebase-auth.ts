import { browserSessionPersistence, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithPopup, TwitterAuthProvider, User } from '@firebase/auth';
import React, { useState } from 'react'

export type loginType = 'google' | 'facebook' | 'twitter'

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User>()


  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider()
  const providerTwitter = new TwitterAuthProvider()
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
      // ...
    } else {
      
    }
  });




  const SignIn = (type: loginType)=>{
    let provider: any
    switch (type) {
      case 'facebook':
        provider = providerFacebook
        break;
      case 'google':
        provider = providerGoogle
        break;
      case 'twitter':
        provider = providerTwitter
        break;

    }
    setPersistence(auth, browserSessionPersistence)
    .then(() => {
      return signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user)
      })
      .catch(error => {
        console.log(error)
      })
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

   
    
   
  }

 

  return {user, SignIn}
}
