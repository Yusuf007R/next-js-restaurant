import {initializeApp} from 'firebase/app';
import {getAuth} from '@firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA1ZfYqfjhazJhM1toxghig71NCpVD-QxY',
  authDomain: 'next-js-restaurant-859b1.firebaseapp.com',
  projectId: 'next-js-restaurant-859b1',
  storageBucket: 'next-js-restaurant-859b1.appspot.com',
  messagingSenderId: '359056960693',
  appId: '1:359056960693:web:05ae016a00ec28c716e2fc',
  measurementId: 'G-BPD25XLZW7',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth();

export default app;
