
import React, { useEffect, useState, useContext } from "react";
import './Checkout.css';
import cards from '../../Assets/images/cards.JPG';
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../Context/ThemeContext";




function Checkout() {


    const location = useLocation();
    const { state } = location;
    console.log(state);


    const productsList = location.state?.products || []; // if state is true, we put all the products we bought in to the productList, otherwise put nothing into it
    const totalPrice = location.state?.totalPriceWithShipping || 0; // if state is true, we put all the price of our shopping in to the totalPrice, otherwise put nothing into it
    const totalQuantity = location.state?.totalQuantity || 0; // if state is true, we put all the quantity of the items we bought in to the totalQuantity, otherwise put nothing into it



    const { theme } = useContext(ThemeContext);


    return (
        <>
            <div className={theme === 'dark' ? 'dark-checkout' : ''}>
                <div className='main-checkout'>
                    <div className="checkout-title">
                        <h1 className={theme === 'dark' ? 'light-checkout-title' : 'dark-checkout-title'}>Responsive Checkout Form</h1>
                        <p className={theme === 'dark' ? 'light-checkout-text' : 'dark-checkout-text'}>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <div className="checkout-info">
                                <form className={theme === 'dark' ? 'dark-checkout-form' : 'light-checkout-form'} action="/action_page.php">
                                    <div className="row">
                                        <div className="col-6">
                                            <h3>Billing Address</h3>

                                            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                                            <input type="text" id="fname" name="firstname" placeholder="John M. Doe" />

                                            <label for="email"><i className="fa fa-envelope"></i> Email</label>
                                            <input type="text" id="email" name="email" placeholder="john@example.com" />

                                            <label for="adr"><i className="fa fa-address-card"></i> Address</label>
                                            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" />

                                            <label for="city"><i className="fa fa-institution"></i> City</label>
                                            <input type="text" id="city" name="city" placeholder="New York" />

                                            <label for="country"><i className="fa fa-flag"></i> Country</label>
                                            <input type="text" id="country" name="country" placeholder="The USA" />

                                            <label for="zip"> Zip Code</label>
                                            <input type="text" id="zip" name="zip" placeholder="10001" />
                                        </div>

                                        <div className="col-6">
                                            <h3>Payment</h3>
                                            <label for="fname">Accepted Cards</label>
                                            <img src={cards} alt="cards" />

                                            <label for="cname">Name on Card</label>
                                            <input type="text" id="cname" name="cardname" placeholder="John More Doe" />

                                            <label for="ccnum">Credit card number</label>
                                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />

                                            <label for="expdate">Expiration Date</label>
                                            <input type="text" id="expdate" name="expdate" placeholder="01.01.2024" />

                                            <label for="cvv">CVV</label>
                                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                                        </div>
                                    </div>

                                    <div className="checkout-checkbox">
                                        <label><input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing</label>
                                    </div>

                                    <button className={theme === 'dark' ? 'dark-checkout-btn' : 'light-checkout-btn'}>Continue to Check Out</button>
                                </form>
                            </div>
                        </div>


                        <div className="col-12 col-lg-3">
                            <div className="checkout-result">
                                <div className="checkout-productList">
                                    <h4>Cart <span><i className="fa fa-shopping-cart"></i> <b className="productItems-quantity">{totalQuantity}</b></span></h4>

                                    {productsList.map(item => (
                                        <p className="checkout-productInfo"><a href="#">{item.title}</a> <span>{item.price}</span></p>
                                    ))}

                                    <hr />
                                    <div className="checkout-totalPrice">
                                        <p>Total <span>{totalPrice} &euro; </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Checkout;