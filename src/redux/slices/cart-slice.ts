import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { productsType } from './products-slice';

//stateType
type useCartType={
  isOpen:boolean;
  productsInCart:{product:productsType, quantity:number}[];
}


//initialState
const initialState : useCartType = {
  isOpen:false,
  productsInCart:[], 
}


//slice
export const cartSlice = createSlice({
  name: 'cart-store',
  initialState,
  reducers: {
    openCart: (state: Draft<typeof initialState>) => {
      state.isOpen = true
    },
    closeCart: (state: Draft<typeof initialState>) => {
      state.isOpen = false
    },  
    toggleCart:(state: Draft<typeof initialState>)=>{
     state.isOpen = !state.isOpen
    },
    addProduct:(state: Draft<typeof initialState>, action: PayloadAction<productsType>)=>{
      let index:number | null = null
      if(state.productsInCart.length){
      state.productsInCart.forEach((element, i)=>{ 
        if(element.product.id == action.payload.id){  
          index = i
        }
      })}
      if(index !== null){
        state.productsInCart[index].quantity = state.productsInCart[index].quantity + 1
        return
      }
      state.productsInCart.push({product:action.payload, quantity:1})
    },
    removeProduct:(state: Draft<typeof initialState>, action: PayloadAction<number>)=>{
      state.productsInCart = state.productsInCart.filter((product)=> product.product.id != action.payload)
    },
    changeQuantity:(state: Draft<typeof initialState>, action: PayloadAction<{id:number, quantity:number}>)=>{
     const index =  state.productsInCart.findIndex(element=> element.product.id === action.payload.id)
     state.productsInCart[index].quantity = action.payload.quantity
    },
    clearCart:(state: Draft<typeof initialState>)=>{
      state.productsInCart = []
    }
  },
});

// Reducers and actions
export const { openCart, closeCart ,toggleCart ,addProduct,removeProduct, changeQuantity,clearCart} = cartSlice.actions;

export default cartSlice.reducer;