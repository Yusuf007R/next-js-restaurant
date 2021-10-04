import { FacebookAuthProvider, getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, User } from '@firebase/auth';
import React, { useState } from 'react'

export type loginType = 'google' | 'facebook' | 'twitter'

export default function useFirebaseAuth() {
  const [user, setUser] = useState<User>()

  const providerGoogle = new GoogleAuthProvider();
  const providerFacebook = new FacebookAuthProvider()
  const providerTwitter = new TwitterAuthProvider()
  const auth = getAuth();

  const SignIn = (type: loginType)=>{
    let provider
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
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      setUser(user)
    })
    .catch(error => {
      console.log(error)
    });
  }

 

  return {user, SignIn}
}
