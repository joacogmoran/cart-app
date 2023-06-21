import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories, fetchAllProducts } from "../../../services/actions/productSliceActions/get";

import ProductFactory from "../../ui/ProductFactory/ProductFactory";
import Pagination from "../../common/Pagination/Pagination";
import Header from "../../ui/Header/Header";
import SearchBar from "../../common/SearchBar/SearchBar";
import Loading from "../../common/Loading/Loading";
import Filters from "../../common/Filters/Filters";


export default function ProductsPage () {

    let dispatch = useDispatch();
    let location = useLocation().pathname.slice(1).toUpperCase();
    
    let products = useSelector(state => state.products.arr);
    let loading = useSelector(state => state.products.loading);
    
    let [ page, setPage ] = useState(1);

    let itemsPerPage = 9;
    let limit = Math.ceil(products.length / itemsPerPage);
    let lastItem = itemsPerPage * page;
    let firstItem = lastItem - itemsPerPage;
    let arr = products.slice(firstItem, lastItem);
    
    let pagination = (newPage) => { setPage(newPage) };
    useEffect(
        () => {
            dispatch(fetchAllProducts(20));
            dispatch(fetchAllCategories());
        }, [dispatch]
    );

    // when the user is on page 2 and searches a product
    // and the result limit of pages is 1, it render nothing
    // in page 2. So this is to prevent that, when the limit of
    // pages is 1, it will set the page to 1.
    useEffect(
        () => {
            if (limit === 1) setPage(1);
        }, [loading]
    );

    return (
        <>
            <Header txt={location}/>
            <SearchBar/>
            <Pagination page={page} limit={limit} pagination={pagination} />
            <Filters/>
            {
                loading? <Loading/>
                : <ProductFactory arr={arr}/>
            }
        </>
    )
};