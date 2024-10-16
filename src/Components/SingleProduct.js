
import React from "react";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";


function SingleProduct() {

    const { productId } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
    }, [])



    return (
        <>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            {/* <p>{product.rating.rate}</p> */}


        </>
    )
}


export default SingleProduct;