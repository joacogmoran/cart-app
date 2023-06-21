import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../../services/actions/cartSliceActions/add";
import { deleteProductFromCart } from "../../../services/actions/cartSliceActions/remove";

import s from './ProductCard.module.css';
import Button from "../../common/Button/Button";



export default function ProductCard ({ id, category, image, title, brand, rating, price }) {
    
    let dispatch = useDispatch();
    let cart = useSelector(state => state.cart.arr);
    let isOnCart = cart.find(item => item.id === id);
    

    const addToCart = () => {
        dispatch(addProductToCart(id))
    };
    const deleteFromCart = () => {
        dispatch(deleteProductFromCart(cart, id))
    };
    
    return (
        <div className={s.container}>

            <img className={s.img} src={image} alt={title} />

            <div className={s.body}>

                <div className={s.bodyContainer}>
                    <div className={s.bodyContainerLeft}>
                        <p>{title} - {brand}</p>
                        <p>{category}</p>
                    </div>
                    <p>{rating}</p>
                </div>

                <div className={s.bodyContainer}>
                    {
                        !isOnCart? <Button txt={'add to cart'} func={addToCart}/>
                        : <Button txt={'delete from cart'} func={deleteFromCart}/>
                    }
                    <p>${price}</p>
                </div>
            
            </div>
        </div>
    )
};


