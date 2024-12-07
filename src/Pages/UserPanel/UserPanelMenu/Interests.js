
import React, {useContext} from "react";
import './Menu.css';
import UserPanelNav from './../UserPanelNav';
import { ThemeContext } from "../../../Context/ThemeContext";



function Interests() {

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
                            <h1>My Interests</h1>

                            <p className="choose-category">Please Choose your <span><i class="fa fa-heart"></i> favourite <i class="fa fa-heart"></i></span> Category or Categories.</p>

                            <div className="favourite-category">
                                <button>Men's Clothing</button>
                                <button>Women's Clothing</button>
                                <button>Jewelry</button>
                                <button>Electronics</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Interests;