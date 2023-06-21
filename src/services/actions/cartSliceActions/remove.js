import { deleteFromCart } from "../../features/cartSlice";


export const deleteProductFromCart = (arr, id) => {
    return (dispatch) => {
        let indexOfItem = arr.findIndex(item => item.id === id);
        if (indexOfItem !== -1) dispatch(deleteFromCart(indexOfItem));
    }
};