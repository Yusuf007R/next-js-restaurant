import { browserSessionPersistence, FacebookAuthProvider,GoogleAuthProvider, onAuthStateChanged, setPersistence, signInWithPopup, TwitterAuthProvider, User, signOut } from '@firebase/auth';
import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { firebaseAuth } from 'src/firebase';
import store from '../store';




//stateType
type userStoreType={
  user:User| null
}

export type loginType = 'google' | 'facebook' | 'twitter'


//initialState
const initialState : userStoreType = {
  user:null
}

//auth providers

const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider()
const providerTwitter = new TwitterAuthProvider()


//slice
export const cartSlice = createSlice({
  name: 'user-store',
  initialState,
  reducers: {
    setUser: (state: Draft<typeof initialState>, action: PayloadAction<User|null>) => {
      state.user = action.payload
    },
    login:(_, action: PayloadAction<loginType>)=>{
      let provider: any
      switch (action.payload) {
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
      setPersistence(firebaseAuth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(firebaseAuth, provider)
        .then(result => {
          const user = result.user;
          setUser(user)
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch((error) => {
        console.log(error)
      });
    },
    logOut:()=>{
      signOut(firebaseAuth).then(() => {
      }).catch((error) => {
      });
    }
  },
  
});



onAuthStateChanged(firebaseAuth, (user) => {
  if (user) {
    return store.dispatch(setUser(user))
    // ...
  }
    store.dispatch(setUser(null))
});


// Reducers and actions
export const {setUser,login, logOut} = cartSlice.actions;

export default cartSlice.reducer;