
import React, { useEffect, useState } from "react";

import axios from "axios";

import ShoppingStuffChild from "./ShoppingStuffChild";

import './ShoppingStuff.css';

import ShoppingButton from "./ShoppingButton";

import { useNavigate } from "react-router-dom";






function ShoppingStuffParent() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/')
            .then(res => {
                // console.log(res);
                setData(res.data)
            })
    }, [])





    const navigate = useNavigate();

    const handleSingleProduct = (productId) => {
        console.log(productId);

        navigate(`/product/${productId}`)
    }



    const[quantity, setQuantity]=useState(1);

    const handleBuyProduct = (price) => {
        console.log('price:'+ price);

        setQuantity(quantity + 1);
        console.log('quantity:' + quantity);

        console.log('total price:' + quantity*price);
    }




    return (
        <>
            <div className="mainClassProduct">
                <h1>Different Products</h1>

                <div class="btns">
                    <ShoppingButton btnName={"Men's Clothing"} btnClass={'categoryBtn'}/>
                    <ShoppingButton btnName={"Women's Clothing"} btnClass={'categoryBtn'}/>
                    <ShoppingButton btnName={"Jewelery"} btnClass={'categoryBtn'}/>
                    <ShoppingButton btnName={"Electronics"} btnClass={'categoryBtn'}/>
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
                            showProduct={() => { handleSingleProduct(item.id) }}

                            buyProduct={() => { handleBuyProduct(item.price) }}
                        />

                        
                    ))}
                </div>
            </div>
        </>
    )
}

export default ShoppingStuffParent;
