


import React from "react";
import './Menu.css';


function PersonalInfo() {
    return (
        <>

            <div className="main-class">
                <div className="row">
                    <div className="col-3">
                        <div className="empty"></div>
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>My Personal Information</h1>

                            <p className="give-data">Please enter your personal information!</p>

                            <form className="info-form">
                                <label for="fName">First Name</label>
                                <input type="text" />
                                <br />
                                <label for="lName">Last Name</label>
                                <input type="text" />
                                <br />
                                <label for="gender">Gender</label>
                                <input type="text" />
                                <br />
                                <label for="bithDate">Birth Date</label>
                                <input type="date" />
                                <br />
                                <label for="job">Job</label>
                                <input type="text" />
                                <br />
                                <label for="email">Email Address</label>
                                <input type="email" />
                                <br />
                                <label for="phone">Phone Number</label>
                                <input type="text" />
                                <br />  
                                <label for="address">Address</label>
                                <input type="text" />
                                <br />
                                <button type="submit">Save Address</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default PersonalInfo;