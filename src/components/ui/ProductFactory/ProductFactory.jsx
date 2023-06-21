import React from "react";
import ProductCard from "../ProductCard/ProductCard";

import s from './ProductFactory.module.css';


export default function ProductFactory ({ arr }) {

    return (
        <div className={`itemsPadding ${s.container}`}>
            {
                !arr.length? <></>
                : arr.map(
                    (item, index) => <ProductCard
                        key={index} id={item.id} category={item.category}
                        image={item.images[0]} title={item.title}
                        brand={item.brand} rating={item.rating}
                        price={item.price}
                    />
                )
            }
        </div>
    )
};