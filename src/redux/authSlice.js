import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // Foydalanuvchi ma'lumotlari
  isAuthenticated: false, // Tizimga kirgan yoki yo'qligi
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload; // Foydalanuvchi ma'lumotlarini saqlash
      state.isAuthenticated = true; // Tizimga kirgan holatini belgilash
    },
    logout: (state) => {
      state.user = null; // Foydalanuvchi ma'lumotlarini tozalash
      state.isAuthenticated = false; // Tizimdan chiqqan holatini belgilash
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;