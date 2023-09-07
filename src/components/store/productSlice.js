import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add(state,action){
      state.push(action.payload);
    },
    remove(state,action){
       return state.filter(item=> item.id != action.payload)
    }
  }
});

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer;

export  function getProducts(){
    return
}
