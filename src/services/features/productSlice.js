import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arr: [],
    categories: [],
    loading: false
};
export const productSlice = createSlice(
    {
        name: 'products', initialState, reducers: {
            getAllProducts: (state, action) => { state.arr = action.payload; state.productSearched = []; state.loading = false; },
            getProducts: (state, action) => { state.arr = action.payload; state.loading = false; },
            getCategories: (state, action) => { state.categories = action.payload },
            loading: (state, action) => { state.loading = action.payload; }
        },
    }
);

export const { getAllProducts, getProducts, getCategories, loading } = productSlice.actions;
export default productSlice.reducer;