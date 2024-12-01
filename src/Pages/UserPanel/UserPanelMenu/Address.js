
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

                            <p className="give-data">Please enter your available address!</p>

                            <form className="address-form">
                                <label for="street">Street</label>
                                <input type="text"/>

                                <label for="house">House Number</label>
                                <input type="text"/>

                                <label for="room">Apartment/Room Number</label>
                                <input type="text"/>

                                <label for="city">City</label>
                                <input type="text"/>

                                <label for="zipcode">Zip Code</label>
                                <input type="text"/>

                                <label for="country">Country</label>
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