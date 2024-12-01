
import React from "react";
import './Menu.css';


function Orders() {
    return (
        <>
            <div className="main-class">
                <div className="row">
                    <div className="col-3">
                        <div className="empty"></div>
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Orders</h1>

                            <div className="order-container mb-5">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="order">
                                            <h2>Order 1</h2>

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
                                            <h4>Order Date:</h4>
                                            <p>2024-01-01</p>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-price">
                                            <h4>Order Price:</h4>
                                            <p>100 &euro;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="order-container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="order">
                                            <h2>Order 2</h2>

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
                                            <h4>Order Date:</h4>
                                            <p>2024-02-02</p>
                                        </div>
                                    </div>

                                    <div className="col-3">
                                        <div className="order-price">
                                            <h4>Order Price:</h4>
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

export default Orders;