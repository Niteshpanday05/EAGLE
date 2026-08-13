import { createSlice } from "@reduxjs/toolkit";

interface authSlice {
  items: number;
}

const initialState: authSlice = {
  items: 0,
};

const authSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {},
});

export default authSlice.reducer;