
import react, { useContext } from 'react';
import "./UserPanel.css";
import { Link } from "react-router-dom";
import { UserContext } from '../../Context/UserContext';
import UserPanelNav from './UserPanelNav';
import { ThemeContext } from "../../Context/ThemeContext";
import Logout from '../../Components/Logout/Logout';




function UserPanel() {

    const { username } = useContext(UserContext); // here we are using the username from the UserContext because we want to display the username in the User Panel.

    const { theme } = useContext(ThemeContext);


    return (
        <>
            <div className={theme === 'dark' ? 'dark-user-panel' : 'user-panel'}>
                <div className="row">
                    <div className="col-3">
                        <UserPanelNav />
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
                                        <Logout/>
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