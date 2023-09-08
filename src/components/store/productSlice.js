import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data:[]
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
     fetchProducts(state,action){
        state.data = action.payload
     }

  }
});

export const {add,remove} = productSlice.actions;
export default productSlice.reducer;

export  function getProducts(){
    return async function getProductsThunk(dispatch,getState){
      const data = await fetch("https://fakestoreapi.com/products")
        const result = data.json()
        dispatch(getProducts(result))
    }
}
