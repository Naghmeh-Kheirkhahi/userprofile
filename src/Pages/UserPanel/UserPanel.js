
import React from "react";
import "./UserPanel.css";
import UserImage from "../../Assets/images/user.jpg";



function UserPanel() {
    return (
        <>
            <div className="user-panel">
                <div className="row">
                    <div className="col-3">
                        <div className="user-panel-list">
                            <h1>My User Panel</h1>

                            <div className="user-panel-image">
                                <img src={UserImage} alt="user image" />
                                <p>Username</p>
                            </div>


                            <div className="user-panel-nav">
                                <ul>
                                    <li><i class="fa fa-dashboard"></i> My Dashboard</li>
                                    <li><i class="fa fa-shopping-bag"></i> My Orders</li>
                                    <li><i class="fa fa-shopping-cart"></i> My Cart</li>
                                    <li><i class="fa fa-map-marker"></i> My Delivery Address</li>
                                    <li><i class="fa fa-euro"></i> My Payment List</li>

                                    <li><i class="fa fa-heart"></i> My Interests</li>
                                    <li><i class='fas fa-user-alt'></i> My Personal Information</li>
                                    <li><i class="fa fa-lock"></i> Change Password</li>
                                    <li><i class="fa fa-sign-out"></i> Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-9">
                        <p>Hello Username</p>

                        <p>Welcome to your user panel. Here you can manage all of your personal information and orders. You can also change your password and delivery address. If you have any questions, please feel free to contact us.</p>

                        <br />

                        <div className="user-panel-content">
                            <div className="row">
                                <div className="col-3">
                                    <i class="fa fa-shopping-bag"></i>
                                    <h2>My Orders</h2>
                                </div>

                                <div className="col-3">
                                    <i class="fa fa-shopping-cart"></i>
                                    <h2>My Cart</h2>
                                </div>

                                <div className="col-3">
                                    <i class="fa fa-map-marker"></i>
                                    <h2>My Delivery Address</h2>
                                </div>

                                <div className="col-3">
                                    <i class="fa fa-euro"></i>
                                    <h2>My Payment List</h2>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-3">
                                    <i class="fa fa-heart"></i>
                                    <h2>My Interests</h2>
                                </div>

                                <div className="col-3">
                                    <i class='fas fa-user-alt'></i>
                                    <h2>My Personal Information</h2>
                                </div>

                                <div className="col-3">
                                    <i class="fa fa-lock"></i>
                                    <h2>Change Password</h2>
                                </div>

                                <div className="col-3">
                                    <i class="fa fa-sign-out"></i>
                                    <h2>Logout</h2>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default UserPanel;