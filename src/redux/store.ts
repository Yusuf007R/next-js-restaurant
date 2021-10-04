import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import cartSlice from './slices/cart-slice';
import mainStoreSlice, { fetchData } from './slices/products-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import userSlice from './slices/user-slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  cart:cartSlice,
  mainStoreSlice:mainStoreSlice,
  userStore:userSlice
});


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, reducers);




const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useStoreDispatch = () => useDispatch<AppDispatch>()
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

store.dispatch(fetchData())

export default store