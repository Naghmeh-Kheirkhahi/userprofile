
import React from "react";
import './Menu.css';


function Address() {
    return (
        <>
            <div className="main-class">
                <div className="row">
                    <div className="col-3">
                        <div className="empty"></div>
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Delivery Address</h1>

                            <p className="give-address">Please enter your available address!</p>

                            <form className="address-form">
                                <label for="">Street</label>
                                <input type="text"/>

                                <label for="">House Number</label>
                                <input type="text"/>

                                <label for="">Apartment/Room Number</label>
                                <input type="text"/>

                                <label for="">City</label>
                                <input type="text"/>

                                <label for="">Zip Code</label>
                                <input type="text"/>

                                <label for="">Country</label>
                                <input type="text"/>

                                <button type="submit">Save Address</button>
                            </form>
                        </div>
                    </div>
                </div>
                    
            </div>
                
        </>
    )
}

export default Address;