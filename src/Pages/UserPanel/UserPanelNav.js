
import React, { useContext } from "react";
import "./UserPanel.css";
import UserImage from "../../Assets/images/user.jpg";
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import { ThemeContext } from "../../Context/ThemeContext";
import Logout from "../../Components/Logout/Logout";



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
                        <li><Link to='/UserPanel'><i class="fa fa-dashboard"></i> <p>My Dashboard</p></Link></li>
                        <li><Link to='/UserPanel/Orders'><i class="fa fa-shopping-bag"></i> <p>My Orders</p></Link></li>
                        <li><Link to='/'><i class="fa fa-shopping-cart"></i> <p>My Cart</p></Link></li>
                        <li><Link to='/UserPanel/Address'><i class="fa fa-map-marker-alt"></i> <p>My Delivery Address</p></Link></li>
                        <li><Link to='/UserPanel/Payment'><i class="fa fa-euro"></i> <p>My Payment List</p></Link></li>
                        <li><Link to='/UserPanel/Interests'><i class="fa fa-heart"></i> <p>My Interests</p></Link></li>
                        <li><Link to='/UserPanel/PersonalInfo'><i class='fas fa-user-alt'></i> <p>My Personal Information</p></Link></li>
                        <li><Link to='/UserPanel/ChangePass'><i class="fa fa-lock"></i> <p>Change Password</p></Link></li>
                        <li><Logout/></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserPanelNav;