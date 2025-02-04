
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
            <div className={theme === 'dark' ? 'userpanel dark-userpanel' : 'userpanel light-userpanel'}>
                <div className="row">
                    <div className="col-5 col-lg-4 col-xxl-3">
                        <UserPanelNav />
                    </div>


                    <div className="col-7 col-lg-8 col-xxl-9">
                        <div className="userpanel-dashboard">
                            <div className="dashboard-description">
                                <h3>Hello {username}!</h3>

                                <p>Welcome to your user panel. Here you can manage all of your personal information and orders. You can also change your password and delivery address. If you have any questions, please feel free to contact us.</p>
                            </div>


                            <div className="userpanel-content">
                                <div className="row">
                                    <div className="col-6 col-lg-3 mb-xxl-5 p-xxl-5 mb-lg-4 pt-lg-5 pb-lg-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2"> 
                                        <Link to='/UserPanel/Orders'><i class="fa fa-shopping-bag"></i>
                                            <p>My Orders</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 mb-xxl-5 p-xxl-5 mb-lg-4 pt-lg-5 pb-lg-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/Cart'><i class="fa fa-shopping-cart"></i>
                                            <p>My Cart</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 mb-xxl-5 p-xxl-5 mb-lg-4 pt-lg-5 pb-lg-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/UserPanel/Address'><i class="fa fa-map-marker-alt"></i> 
                                            <p>My Delivery Address</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 mb-xxl-5 p-xxl-5 mb-lg-4 pt-lg-5 pb-lg-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/UserPanel/Payment'><i class="fa fa-euro"></i>
                                            <p>My Payment List</p></Link>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-6 col-lg-3 ps-xxl-5 pe-xxl-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/UserPanel/Interests'><i class="fa fa-heart"></i>
                                            <p>My Interests</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 ps-xxl-5 pe-xxl-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/UserPanel/PersonalInfo'><i class='fas fa-user-alt'></i>
                                            <p>My Personal Information</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 ps-xxl-5 pe-xxl-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
                                        <Link to='/UserPanel/ChangePass'><i class="fa fa-lock"></i>
                                            <p>Change Password</p></Link>
                                    </div>

                                    <div className="col-6 col-lg-3 ps-xxl-5 pe-xxl-5 ps-xl-4 pe-xl-4 ps-lg-3 pe-lg-3 pt-3 pb-3 pe-2 ps-2">
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