
import React, { useEffect, useState } from "react";

import axios from "axios";

import ShoppingStuffChild from "./ShoppingStuffChild";

import './ShoppingStuff.css';

import ShoppingButton from './ShoppingButton';





function ShoppingStuffParent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                console.log(res);
                setData(res.data)
            })
    }, [])





    return (
        <>
            <div className="mainClassProduct">
                <h1>Different Products</h1>

                <div class="btns">
                    <ShoppingButton btnName={"Men's Clothing"}/>
                    <ShoppingButton btnName={"Women's Clothing"}/>
                    <ShoppingButton btnName={"Jewelery"}/>
                    <ShoppingButton btnName={"Electronics"}/>
                </div>


                <div className="row">
                    {data.map(item => (
                        <ShoppingStuffChild
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            category={item.category}
                            description={item.description}
                            ratingRate={item.rating.rate}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShoppingStuffParent;
