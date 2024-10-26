

// if ({ state }) {
//     true
// }

// else {

//     false
// }

// state ? {} : {}   another way T / F



import React, { useState } from "react";
import './Cart.css';
import { useLocation } from "react-router-dom";



function Cart() {

    const [quantity, setQuantity] = useState(1);



    const location = useLocation(); // useNavigate sends something like id or any data/parameter to somewhere else and we can determine a url and send/pass something like id to the url by useNavigate
    const { state } = location; // useParams gets only one parameter like id sent by useNavigate but useLocation does something like this but can get more than one parameters in an Object form from useNavigate, so useLocation is useful for website security. Also useLocation can determine the location we are in and where we were and where we are going.
    // console.log(state);
    // console.log(state.name, state.price, state.category, state.image);



    const getProducts = JSON.parse(localStorage.getItem('productKey'));
    // console.log('product in card:' ,getProduct);



    let totalPrice = getProducts.reduce((total, product) => {
        return (total + (product.price * quantity))
    }, 0)



    const handleAddQuantity = () => {

        setQuantity(quantity + 1);
        console.log(quantity);
        
    }

    const handleReduceQuantity = () => {

        setQuantity(quantity - 1);
        console.log(quantity);
    }





    return (

        <>

            {state ? (
                <div className="mainClass cart">
                    <div class="card">
                        <div class="row">
                            <div class="col-md-8 cart">
                                <div class="title">
                                    <div class="row">
                                        <div class="col"><h4><b>Shopping Cart</b></h4></div>
                                        <div class="col align-self-center text-right text-muted">3 items</div>
                                    </div>
                                </div>
                                <div class="row border-top border-bottom">
                                    {
                                        getProducts.map(item => (

                                            <div class="row main align-items-center">
                                                <div class="col-2"><img class="img-fluid" src={item.image} /></div>
                                                <div class="col">
                                                    <div class="row text-muted">Name: {item.name}</div>
                                                    <div class="row">Category: {item.category}</div>
                                                </div>
                                                <div class="col">
                                                    <p onClick={handleReduceQuantity}>-</p><p class="border">{quantity}</p><p onClick={handleAddQuantity}>+</p>
                                                </div>
                                                <div class="col">&euro; {item.price} <span class="close">&#10005;</span></div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
                            </div>
                            <div class="col-md-4 summary">
                                <div><h5><b>Summary</b></h5></div>
                                <hr />
                                <div class="row">
                                    <div class="col" style={{ paddingLeft: '0' }}>ITEMS 3</div>
                                    <div class="col text-right">&euro; 132.00</div>
                                </div>
                                <form>
                                    <p>SHIPPING</p>
                                    <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                                    <p>GIVE CODE</p>
                                    <input id="code" placeholder="Enter your code" />
                                </form>
                                <div class="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                    <div class="col">TOTAL PRICE</div>
                                    <div class="col text-right">&euro;
                                        {totalPrice}
                                    </div>
                                </div>
                                <button class="btn">CHECKOUT</button>
                            </div>
                        </div>

                    </div>
                </div>


            )


                : (
                    <div><p>Your Cart is empty.</p></div>
                )}
        </>

    )
}

export default Cart;