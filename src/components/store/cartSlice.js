import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {
    add(state,action){
        debugger
      state.push(action.payload);
    }
  }
});

export const {add} = cartSlice.actions;
export default cartSlice.reducer;
