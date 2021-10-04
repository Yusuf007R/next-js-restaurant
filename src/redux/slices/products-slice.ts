import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';


export const fetchData = createAsyncThunk(
  'users/getData',
  async () => {
    try {
      const response =  await fetch('/api/getdata')
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }
)

export type categoriesType ={
  id: number;
  name: string;
  icon: string;
}

export type productsType={
    id: number;
    name: string;
    qualification: number;
    time: string;
    price: number;
    image: string;
    category:number
}

type sliceType ={
  categories:categoriesType[]
  products:productsType[]
  currentCategory:number;
}

const initialState:sliceType={
  products:[],categories:[],
  currentCategory:1
}

const mainStoreSlice = createSlice({
  name: 'main-store',
  initialState: initialState,
  reducers: {
    setCurrentCategory:(state: Draft<typeof initialState>, action: PayloadAction<number>)=>{
      state.currentCategory = action.payload
     },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.products = action.payload.products
    })
  },

})
export const {setCurrentCategory} = mainStoreSlice.actions;


export default mainStoreSlice.reducer;