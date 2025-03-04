import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './modalSlice'
import productsReducer from './productsSlice '
import cartReducer from './cartSlice'
import authReducer from './authSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  }
})