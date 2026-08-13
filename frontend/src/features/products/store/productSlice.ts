import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  ProductFilters,
  ProductOrdering,
} from "../types/filter.types";

const initialState: ProductFilters = {
  search: "",
  category: "",
  brand: "",
  min_price: undefined,
  max_price: undefined,
  ordering: "-created_at",
  page: 1,
  page_size: 12,
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    setSearch: (
      state,
      action: PayloadAction<string>
    ) => {
      state.search = action.payload;
      state.page = 1;
    },

    setCategory: (
      state,
      action: PayloadAction<string>
    ) => {
      state.category = action.payload;
      state.page = 1;
    },

    setBrand: (
      state,
      action: PayloadAction<string>
    ) => {
      state.brand = action.payload;
      state.page = 1;
    },

    setMinPrice: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.min_price = action.payload;
      state.page = 1;
    },

    setMaxPrice: (
      state,
      action: PayloadAction<number | undefined>
    ) => {
      state.max_price = action.payload;
      state.page = 1;
    },

    setOrdering: (
      state,
      action: PayloadAction<ProductOrdering>
    ) => {
      state.ordering = action.payload;
    },

    setCurrentPage: (
      state,
      action: PayloadAction<number>
    ) => {
      state.page = action.payload;
    },

    clearFilters: () => initialState,
  },
});

export const {
  setSearch,
  setCategory,
  setBrand,
  setMinPrice,
  setMaxPrice,
  setOrdering,
  setCurrentPage,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;