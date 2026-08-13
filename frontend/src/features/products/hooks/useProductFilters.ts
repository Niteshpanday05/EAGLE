import { useAppDispatch, useAppSelector } from "@/store";

import {
  clearFilters,
  setBrand,
  setCategory,
  setCurrentPage,
  setMaxPrice,
  setMinPrice,
  setOrdering,
  setSearch,
} from "../store/productSlice";
import { ProductOrdering } from "../types/filter.types";

export const useProductFilters = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(
    (state) => state.products
  );

  return {
    filters,

    setSearch: (value: string) =>
      dispatch(setSearch(value)),

    setCategory: (value: string) =>
      dispatch(setCategory(value)),

    setBrand: (value: string) =>
      dispatch(setBrand(value)),

    setMinPrice: (value?: number) =>
      dispatch(setMinPrice(value)),

    setMaxPrice: (value?: number) =>
      dispatch(setMaxPrice(value)),

    setOrdering: (value: ProductOrdering) =>
      dispatch(setOrdering(value)),

    setCurrentPage: (page: number) =>
      dispatch(setCurrentPage(page)),

    clearFilters: () =>
      dispatch(clearFilters()),
  };
};