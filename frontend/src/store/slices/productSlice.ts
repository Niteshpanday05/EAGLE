import { createSlice } from "@reduxjs/toolkit";

interface productSlice {
  items: number;
}

const initialState: productSlice = {
  items: 0,
};

const productSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {},
});

export default productSlice.reducer;