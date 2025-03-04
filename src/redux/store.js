import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './modalSlice'
import productsReducer from './productsSlice '
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsReducer,
    cart: cartReducer,
  }
})