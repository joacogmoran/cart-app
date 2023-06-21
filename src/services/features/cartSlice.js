import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    arr: []
}
export const cartSlice = createSlice(
    {
        name: 'cart', initialState,
        reducers: {
            addToCart: (state, action) => { state.arr.push(action.payload) },
            deleteFromCart: (state, action) => { state.arr.splice(action.payload, 1) }
        }
    }
);

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;