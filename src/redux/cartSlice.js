import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: function (state, action) {
            const existingItem = state.items.find(item => item.id == action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: function (state, action) {
            state.items = state.items.filter(item => item.id != action.payload)
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;