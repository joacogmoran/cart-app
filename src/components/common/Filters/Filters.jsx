import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, getProductsWithCategory, setProductOrder } from "../../../services/actions/productSliceActions/get";

import s from './Filters.module.css';
import Button from "../Button/Button";


export default function Filters () {
    let dispatch = useDispatch();
    let products = useSelector(state => state.products.arr);
    let categories = useSelector(state => state.products.categories);

    let [ category, setCategory ] = useState('');
    let [ order, setOrder ] = useState('');


    const getAll = () => {
        dispatch(fetchAllProducts());
        setCategory('');
        setOrder('');
    };
    const handleOrder = (e) => {
        dispatch(setProductOrder(products, e.target.value));
        setOrder(e.target.value);
    };
    const handleCategory = (e) => {
        dispatch(getProductsWithCategory(products, e.target.value));
        setCategory(e.target.value);
    };

    return (
        <div className={`itemsPadding ${s.container}`}>
            <Button txt={'Get all'} func={getAll}/>
            <select className={s.select} onChange={handleOrder} value={order}>
                <option value="">order</option>
                <option value="lower">lower</option>
                <option value="higher">higher</option>
            </select>
            <select className={s.select} onChange={handleCategory} value={category}>
                <option value=''>category</option>
                {
                    categories.map(
                        (item, index) => <option key={index} value={item}>
                            {item}
                        </option>
                    )
                }
            </select>
        </div>
    )
};