import { createSlice } from "@reduxjs/toolkit";

interface wishlistSlice {
  items: number;
}

const initialState: wishlistSlice = {
  items: 0,
};

const wishlistSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {},
});

export default wishlistSlice.reducer;