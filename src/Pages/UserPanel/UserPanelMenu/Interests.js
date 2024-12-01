
import React from "react";
import './Menu.css';


function Interests() {
    return (
        <>
            <div className="main-class">
                <div className="row">
                    <div className="col-3">
                        <div className="empty"></div>
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