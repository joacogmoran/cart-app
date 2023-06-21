import React, { useState } from "react";
import { useLocation } from "react-router-dom";


import Header from "../../ui/Header/Header";
import Pagination from "../../common/Pagination/Pagination";
import ProductFactory from "../../ui/ProductFactory/ProductFactory";
import { useSelector } from "react-redux";



export default function CartPage () {

    let location = useLocation().pathname.slice(1).toUpperCase();
    let cartArr = useSelector(state => state.cart.arr);
    let [ page, setPage ] = useState(1);

    let itemsPerPage = 9;
    let limit = Math.ceil(cartArr.length / itemsPerPage);
    let lastItem = itemsPerPage * page;
    let firstItem = lastItem - itemsPerPage;
    let arr = cartArr.slice(firstItem, lastItem);

    let pagination = (newPage) => { setPage(newPage) };


    return (
        <>
            <Header txt={location}/>
            <Pagination page={page} limit={limit} pagination={pagination}/>
            <ProductFactory arr={arr}/>
        </>
    )
};