
import react, {useContext} from 'react';
import "./UserPanel.css";
import UserImage from "../../Assets/images/user.jpg";
import { Link } from "react-router-dom";
import {UserContext} from '../../Context/UserContext';




function UserPanel() {

    const { username } = useContext(UserContext); // here we are using the username from the UserContext because we want to display the username in the User Panel.


    return (
        <>
            <div className="user-panel">
                <div className="row">
                    <div className="col-3">
                        <div className="user-panel-list">
                            <h1>My User Panel</h1>

                            <div className="user-panel-image">
                                <img src={UserImage} alt="user image" />
                                <p>{username}</p>
                            </div>


                            <div className="user-panel-nav">
                                <ul>
                                    <li><Link to='/UserPanel'><i class="fa fa-dashboard"></i> My Dashboard</Link></li>
                                    <li><Link to='/UserPanel/Orders'><i class="fa fa-shopping-bag"></i> My Orders</Link></li>
                                    <li><Link to='/'><i class="fa fa-shopping-cart"></i> My Cart</Link></li>
                                    <li><Link to='/UserPanel/Address'><i class="fa fa-map-marker-alt"></i> My Delivery Address</Link></li>
                                    <li><Link to='/UserPanel/Payment'><i class="fa fa-euro"></i> My Payment List</Link></li>
                                    <li><Link to='/UserPanel/Interests'><i class="fa fa-heart"></i> My Interests</Link></li>
                                    <li><Link to='/UserPanel/PersonalInfo'><i class='fas fa-user-alt'></i> My Personal Information</Link></li>
                                    <li><Link to='/UserPanel/ChangePass'><i class="fa fa-lock"></i> Change Password</Link></li>
                                    <li><Link to='/Login'><i class="fa fa-sign-out"></i> Logout</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-9">
                        <div className="user-panel-dashboard">
                            <div className="dashboard-description">
                                <h3>Hello {username}!</h3>

                                <p>Welcome to your user panel. Here you can manage all of your personal information and orders. You can also change your password and delivery address. If you have any questions, please feel free to contact us.</p>
                            </div>


                            <div className="user-panel-content">
                                <div className="row mb-5">
                                    <div className="col-3 mb-5 p-5">
                                        <Link to='/UserPanel/Orders'><i class="fa fa-shopping-bag"></i>
                                            <h2>My Orders</h2></Link>
                                    </div>

                                    <div className="col-3 mb-5 p-5">
                                        <Link to='/'><i class="fa fa-shopping-cart"></i>
                                            <h2>My Cart</h2></Link>
                                    </div>

                                    <div className="col-3 mb-5 p-5">
                                        <Link to='/UserPanel/Address'><i class="fa fa-map-marker-alt"></i> 
                                            <h2>My Delivery Address</h2></Link>
                                    </div>

                                    <div className="col-3 mb-5 p-5">
                                        <Link to='/UserPanel/Payment'><i class="fa fa-euro"></i>
                                            <h2>My Payment List</h2></Link>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-3">
                                        <Link to='/UserPanel/Interests'><i class="fa fa-heart"></i>
                                            <h2>My Interests</h2></Link>
                                    </div>

                                    <div className="col-3">
                                        <Link to='/UserPanel/PersonalInfo'><i class='fas fa-user-alt'></i>
                                            <h2>My Personal Information</h2></Link>
                                    </div>

                                    <div className="col-3">
                                        <Link to='/UserPanel/ChangePass'><i class="fa fa-lock"></i>
                                            <h2>Change Password</h2></Link>
                                    </div>

                                    <div className="col-3">
                                        <Link to='/Login'><i class="fa fa-sign-out"></i>
                                            <h2>Logout</h2></Link>
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

export default UserPanel;