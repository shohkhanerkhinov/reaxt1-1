import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: function(state, action) {
      state.products.push(action.payload);
    },
    removeProduct: function(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProduct: function(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
  },
});

export default productsSlice.reducer;
export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;