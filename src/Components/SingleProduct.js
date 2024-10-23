
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ShoppingStuff.css';
import ShoppingButton from "./ShoppingButton";
import { useNavigate } from "react-router-dom";






function SingleProduct() {

    const { productId } = useParams() // we get the id of each product and make an individual address for each one using navigate and pass it to the useParams to use it for addressing the address of each product.
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productId}`) // when we do like this , we pass th id of each product, so they dont need to use map and item on data array. So in return, we use only product not item
            .then(res => {
                console.log(res);
                setProduct(res.data)
            })
    }, [])






    const navigate = useNavigate();

    const buySingleProduct = () => {
        navigate('/cart' , {
            state: { id: product.id, name: product.title, category: product.category , price: product.price, image: product.image, quantity: 1 }
        })
    }





    return (
        <>
            <div className="singleProduct">
                <img src={product.image} />
                <div className="ps-5">
                    <h1>{product.title}</h1>
                    <p className="productPrice"><b>{product.price} </b>Euro</p>
                    <p className="productCategory"><b>{product.category} </b>category</p>
                    <p className="productDescription">{product.description}</p>
                    <p className="productRating"><b>Rating: </b><span class="fa fa-star"></span><span class="fa fa-star"></span>
                        <span class="fa fa-star"></span><span class="fa fa-star"></span><span class="fa fa-star"></span></p>

                    {/* <ShoppingButton btnName={"BUY NOW"} btnClass={'productBtn'} onClick={}/> */}

                    <button onClick={buySingleProduct}>BUY NOW</button> 
                    {/* we don't use props here because we want to use this method in this component. */}
                </div>
            </div>
        </>
    )
}


export default SingleProduct;