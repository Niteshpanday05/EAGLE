import axios from "axios";

import {
  Product,
  ProductDetailResponse,
  ProductListResponse,
} from "../types/product.types";

import { Category } from "../types/category.types";
import { ProductFilters } from "../types/filter.types";
import { buildQueryParams } from "../utils/product.utils";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export const productApi = {

  async getProducts(
    filters?: ProductFilters
  ): Promise<ProductListResponse> {

    const response = await axios.get<ProductListResponse>(
      `${API_URL}/products/`,
      {
        params: buildQueryParams(filters || {}),
      }
    );


    console.log(
      "Products API Response:",
      response.data
    );


    return response.data;
  },



  async getProduct(
    slug: string
  ): Promise<ProductDetailResponse> {

    const response = await axios.get<ProductDetailResponse>(
      `${API_URL}/products/${slug}/`
    );


    console.log(
      "Product Detail Response:",
      response.data
    );


    return response.data;
  },



  async getCategories(): Promise<Category[]> {

    const response = await axios.get<Category[]>(
      `${API_URL}/products/categories/`
    );


    return response.data;
  },



  async getRelatedProducts(
    slug: string
  ): Promise<Product[]> {

    const response = await axios.get<Product[]>(
      `${API_URL}/products/${slug}/related/`
    );


    return response.data;
  },

};