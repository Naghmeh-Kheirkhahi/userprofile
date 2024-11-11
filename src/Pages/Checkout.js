
import React, { useEffect, useState } from "react";
import './Checkout.css';
import cards from '../Assets/images/cards.JPG';




function Checkout() {
    return (
        <>

            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="title">
                <h2>Responsive Checkout Form</h2>
                <p>Resize the browser window to see the effect. When the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other.</p>
            </div>

            <div className="row">
                <div className="col-9 pe-0">
                    <div className="container">
                        <form action="/action_page.php">
                            <div className="row">
                                <div className="col-6 pe-5">
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

                                <div className="col-6 ps-5 pe-5">
                                    <h3>Payment</h3>
                                    <label for="fname">Accepted Cards</label>
                                    <img src={cards} alt="cards" />

                                    <br/><br/>

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

                            <br/>
                            <label className="checkbox"><input type="checkbox" checked="checked" name="sameadr" /> Shipping address same as billing</label>
                            <br/>
                            <button>Continue to Check Out</button>
                        </form>
                    </div>
                </div>


                <div className="col-3 ps-0">
                    <div className="container">
                        <div className="productList">
                            <h4>Cart <span><i className="fa fa-shopping-cart"></i> <b className="itemNumber">4</b></span></h4>
                            <p><a href="#">Product 1</a> <span>$15</span></p>
                            <p><a href="#">Product 2</a> <span>$5</span></p>
                            <p><a href="#">Product 3</a> <span>$8</span></p>
                            <p><a href="#">Product 4</a> <span>$2</span></p>
                            <hr/>
                            <div className="totalPrice p-0 mt-5">
                                <p>Total <span><b>$30</b></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Checkout;