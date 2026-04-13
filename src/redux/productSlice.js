import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
  const resp = await fetch('https://dummyjson.com/products');
  const jsonResp = await resp.json();
  return jsonResp.products;
});

const initialState = {
  items: [],
  status: 'loading'
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  }
});

export default productsSlice.reducer;