import React from "react";
import { useDispatch } from "react-redux";
import { loading } from "../../../services/features/productSlice";

import s from './Pagination.module.css';
import Button from "../Button/Button";



export default function Pagination ({ page, limit, pagination }) {

    let dispatch = useDispatch();

    const next = () => {
        dispatch(loading(true));
        pagination(page+1)
        setTimeout(() => { dispatch(loading(false)) }, 1000);
    };

    const back = () => {
        dispatch(loading(true));
        pagination(page-1)
        setTimeout(() => { dispatch(loading(false)) }, 1000);
    };

    return (
        <div className={`itemsPadding ${s.container}`}>
            <Button txt={'back'} func={back} disable={!(page > 1)}/>
            <p className={s.containerTxt}>{page}</p>
            <Button txt={'next'} func={next} disable={!(page < limit)}/>
        </div>
    )
};