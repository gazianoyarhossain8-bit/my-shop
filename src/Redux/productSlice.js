// Redux/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({page,search}) => {
    const res = await axios.get(
      'https://shop-backend-mz62.onrender.com/api/products',{
        params: {page, limit: 4, search}
      });
    return res.data; // totalProducts, currentPage, totalPages, products
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    loading: false,
    currentPage: 1,
    totalPages: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
      });
  },
});

export default productSlice.reducer;