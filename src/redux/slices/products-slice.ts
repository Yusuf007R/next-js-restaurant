import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchData = createAsyncThunk(
  'users/fetchByIdStatus',
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

}

type sliceType ={
  categories:categoriesType[]
  products:productsType[]
}

const initialState:sliceType={
  products:[],categories:[]
}

const mainStoreSlice = createSlice({
  name: 'mainStore',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.products = action.payload.products
    })
  },
})



export default mainStoreSlice.reducer;