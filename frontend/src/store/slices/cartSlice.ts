import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: number;
}

const initialState: CartState = {
  items: 0,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {},
});

export default cartSlice.reducer;