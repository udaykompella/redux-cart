import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProducts(state, action) {
      state.data = action.payload;
      console.log(state.data,"datainfetchproducts")
    },
  },
});

export const { add, remove, fetchProducts } = productSlice.actions;
export default productSlice.reducer;

export function getProducts() {
  debugger
  return async function getProductsThunk(dispatch, getState) {
    // const data = await fetch("https://fakestoreapi.com/products")
    // console.log(data,"productresult")
    const pendata = await fetch("https://fakestoreapi.com/products")
    const movies =  await pendata.json()
    console.log(movies,"movies")
    dispatch(fetchProducts(movies))
      // .then((data) => data.json())
      // .then((result) => console.log(result));
    // const data = await fetch("https://fakestoreapi.com/products")
    //   .then((result) => {
    //     debugger
    //     console.log(result, "resultsproduct");
    //   })
      // .then((data) => {
      //   debugger;
      //   const result = data.json();
      //   console.log(result, "resultinpromise");
      //   dispatch(fetchProducts(result));
      // });
    // console.log(data.json(),"responseproducts")
    // let url = "https://fakestoreapi.com/products"
    // const data = await axios.get(url).then((result)=>{
    //    console.log(result,"productresult")
    // })

    // dispatch(getProducts(result))
  };
}
