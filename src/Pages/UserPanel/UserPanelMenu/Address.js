

import React, { useContext } from "react";
import './Menu.css';
import UserPanelNav from './../UserPanelNav';
import { ThemeContext } from "../../../Context/ThemeContext";




function Address() {

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
                            <h1>My Delivery Address</h1>

                            <p className="give-data">Please enter your available address!</p>

                            <form className="userpanel-form">
                                <label for="street">Street</label>
                                <input type="text" />

                                <label for="house">House Number</label>
                                <input type="text" />

                                <label for="room">Apartment/Room Number</label>
                                <input type="text" />

                                <label for="city">City</label>
                                <input type="text" />

                                <label for="zipcode">Zip Code</label>
                                <input type="text" />

                                <label for="country">Country</label>
                                <input type="text" />

                                <button className={theme === 'dark' ? 'form-btn dark-form-btn' : 'form-btn light-form-btn'} type="submit">Save Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address;