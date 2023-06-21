import React from "react";

import s from './Loading.module.css';
import loadGif from '../../../assets/gif/loading-gif.gif';


export default function Loading () {
    return (
        <div className={s.imageContainer}>
            <img className={s.image} src={loadGif} alt='loading'/>
        </div>
    )
};