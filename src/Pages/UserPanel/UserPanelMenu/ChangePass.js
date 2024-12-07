

import React, {useContext} from "react";
import './Menu.css';
import UserPanelNav from './../UserPanelNav';
import { ThemeContext } from "../../../Context/ThemeContext";



function ChangePass() {

    const { theme } = useContext(ThemeContext);


    return (
        <>

            <div className={theme === 'dark' ? 'dark-main-class' : 'main-class'}>
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
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

                                <button className={theme === 'dark' ? 'dark-btn' : 'light-btn'} type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ChangePass;