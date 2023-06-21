import axios from "axios";
import { productsBaseURL } from "../productSliceActions/baseUrl";
import { addToCart } from "../../features/cartSlice";



export const addProductToCart = (id) => {
    return async (dispatch) => {
        let product = await axios.get(`${productsBaseURL}/products/${id}`);
        dispatch(addToCart(product.data))
    }
};