import React from "react";

import s from './Button.module.css';


export default function Button ({ txt, func, disable }) {
    return (
        <button className={s.button} onClick={() => func()} disabled={disable}>{txt}</button>
    )
};