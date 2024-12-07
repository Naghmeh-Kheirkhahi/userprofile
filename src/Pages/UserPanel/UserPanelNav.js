
import React, { useContext } from "react";
import "./UserPanel.css";
import UserImage from "../../Assets/images/user.jpg";
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import { ThemeContext } from "../../Context/ThemeContext";



function UserPanelNav() {

    const { username } = useContext(UserContext);
    const { theme } = useContext(ThemeContext);


    return (
        <>
            <div className={theme === 'dark' ? 'dark-list' : 'user-panel-list'}>
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
        </>
    )
}

export default UserPanelNav;