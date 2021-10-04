import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart-slice';
import mainStoreSlice, { fetchData } from './slices/products-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'



const store = configureStore({
  reducer: {
   cart:cartSlice,
   mainStoreSlice:mainStoreSlice
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useStoreDispatch = () => useDispatch<AppDispatch>()
export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector

store.dispatch(fetchData())

export default store