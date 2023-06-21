import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../services/actions/productSliceActions/get";

import s from './SearchBar.module.css';
import Button from "../../common/Button/Button";



export default function SearchBar () {

    let dispatch = useDispatch();
    let [ input, setInput ] = useState('');

    const handleChange = (e) => { setInput(e.target.value) };
    const searchProduct = () => {
        dispatch(fetchProducts(input))
        setInput('');
    };

    return (
        <div className={`itemsPadding ${s.container}`}>
            <input className={s.input} value={input} onChange={handleChange} type="text"/>
            <Button txt={'enter'} func={searchProduct} disable={false} />
        </div>    
    )
};