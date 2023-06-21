import React from "react";

import s from './Header.module.css';
import NavBar from "../../ui/NavBar/NavBar";



export default function Header ({ txt }) {
    return (
        <>
            <header className={s.header}>
                <h1 className={s.title}>{txt}</h1>
                <NavBar/>
            </header>

        </>
    )
};