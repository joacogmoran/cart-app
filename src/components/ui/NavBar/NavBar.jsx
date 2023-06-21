import React from "react";
import { Link } from "react-router-dom";

import s from './NavBar.module.css';

export default function NavBar () {
    return (
        <nav className={s.nav}>
            <label className={s.menuIcon} htmlFor="menuInput">MENU</label>
            <input className={s.menuInput} id="menuInput" type="checkbox"/>
            <ul className={s.menuList}>
                <li> <Link className={s.link} to='/'> HOME </Link> </li>
                <li> <Link className={s.link} to='/cart'> CART </Link> </li>
            </ul>
        </nav>
    )
};