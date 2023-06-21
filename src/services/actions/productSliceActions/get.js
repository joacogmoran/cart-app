import axios from "axios";
import { productsBaseURL } from "./baseUrl";
import { getAllProducts, getProducts, getCategories, loading } from "../../features/productSlice";


//* GET - fetch all the products ( with or without limit )
export const fetchAllProducts = (limit) => {
    return async (dispatch) => {
        try {
            let response;

            dispatch(loading(true));
            
            // if there is not a limit provided, fetch all
            !limit? response = await axios.get(`${productsBaseURL}/products`)
            : response = await axios.get(`${productsBaseURL}/products?limit=${limit}`)
            
            dispatch(getAllProducts(response.data.products));
        } catch (e) { console.log('An error occured: ', e.message); }
    }
};


//* GET - fetch all the product that match the search
export const fetchProducts = (name) => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            let response = await axios.get(`${productsBaseURL}/products/search?q=${name}`);
            dispatch(getProducts(response.data.products))
        } catch (error) { console.log('An error occured: ', error) }
    }
};


//* GET - all products that match the category
export const getProductsWithCategory = (products, category) => {
    return async (dispatch) => {
        dispatch(loading(true));
        let productsArr = products.filter(item => item.category === category);
        setTimeout(() => { dispatch(getProducts(productsArr)); }, 1000);
    }
};


//* GET - all categories
export const fetchAllCategories = () => {
    return async (dispatch) => {
        try {
            let response = await axios.get(`${productsBaseURL}/products/categories`);
            dispatch(getCategories(response.data));
        } catch (e) { console.log('An error occured: ', e.message); }
    }
};


export const setProductOrder = (products, order) => {
    return (dispatch) => {
        // made a copy of the arr beacause it's not posible to
        // modify the array
        let newOrder = [...products];
        if (order === 'lower') newOrder.sort((lastItem, nextItem) => lastItem.price - nextItem.price);
        else newOrder.sort((lastItem, nextItem) => nextItem.price - lastItem.price );
        dispatch(getProducts(newOrder));
    };
};