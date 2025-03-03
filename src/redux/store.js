import { configureStore } from "@reduxjs/toolkit";
import modalSlice from './modalSlice'
import productsReducer from './productsSlice '

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    products: productsReducer,
  }
})