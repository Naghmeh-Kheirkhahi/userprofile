


import React from "react";
import './Menu.css';


function ChangePass() {
    return (
        <>

            <div className="main-class">
                <div className="row">
                    <div className="col-3">
                        <div className="empty"></div>
                    </div>


                    <div className="col-9">
                        <div className="main-container">
                            <h1>New Password</h1>

                            <p className="give-data">Here, you can change your password and choose a new one.</p>


                            <form className="pass-form">
                                <label for="cPass">Current Password</label>
                                <input type="text" />

                                <label for="nPass">New Password</label>
                                <input type="text" />

                                <label for="rPass">Repeat New Password</label>
                                <input type="text" />

                                <button type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ChangePass;