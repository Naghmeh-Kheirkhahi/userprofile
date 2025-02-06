

import React, {useContext} from "react";
import './Menu.css';
import UserPanelNav from './../UserPanelNav';
import { ThemeContext } from "../../../Context/ThemeContext";



function Payment() {

    const { theme } = useContext(ThemeContext);


    return (
        <>
            <div className={theme === 'dark' ? 'dark-main-class' : 'light-main-class'}>
                <div className="row">
                    <div className="col-5 col-lg-4 col-xxl-3">
                        <UserPanelNav />
                    </div>


                    <div className="col-7 col-lg-8 col-xxl-9">
                        <div className="main-container">
                            <h1>My Payment List</h1>

                            <div className="order-container mb-4 mb-md-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="order">
                                            <h2>Payment 1</h2>

                                            <div className="product-order">
                                                <h3>Product 1</h3>
                                                <p><b>25</b> &euro;</p>
                                            </div>

                                            <div className="product-order">
                                                <h3>Product 2</h3>
                                                <p><b>45</b> &euro;</p>
                                            </div>

                                            <div className="product-order">
                                                <h3>Product 3</h3>
                                                <p><b>30</b> &euro;</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-date">
                                            <h4>Date:</h4>
                                            <p>2024-01-01</p>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-price">
                                            <h4>Price:</h4>
                                            <p>100 &euro;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="order-container mt-4 mt-md-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="order">
                                            <h2>Payment 2</h2>

                                            <div className="product-order">
                                                <h3>Product 1</h3>
                                                <p><b>50</b> &euro;</p>
                                            </div>

                                            <div className="product-order">
                                                <h3>Product 2</h3>
                                                <p><b>40</b> &euro;</p>
                                            </div>

                                            <div className="product-order">
                                                <h3>Product 3</h3>
                                                <p><b>60</b> &euro;</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-date">
                                            <h4>Date:</h4>
                                            <p>2024-02-02</p>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-price">
                                            <h4>Price:</h4>
                                            <p>150 &euro;</p>
                                        </div>
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


export default Payment;