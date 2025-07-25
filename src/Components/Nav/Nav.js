import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/images/logo.png';
import './Nav.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';


function Nav() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { username } = useContext(UserContext);


    return (
        <nav className="navbar navbar-expand-lg navbar-light position-fixed">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="Logo" className="nav-logo" />
                </Link>

                <button className="navbar-toggler me-3 custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="custom-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse ms-4" id="navbarNav">
                    <ul className="navbar-nav me-auto mt-2 mt-xxl-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {username ? (
                            <li className="nav-item nav-dropdown">
                                <Link className="nav-link" to="/UserPanel" id="navbarDropdown">
                                    <i className="fa fa-user"></i> {username}
                                </Link>
                                <ul className="dropdown-menu position-fixed" aria-labelledby="navbarDropdown">
                                    <li><Link to="/UserPanel/Orders">Orders</Link></li>
                                    <li><Link to="/UserPanel/Address">Address</Link></li>
                                    <li><Link to="/UserPanel/Payment">Payment List</Link></li>
                                    <li><Link to="/UserPanel/Interests">Interests</Link></li>
                                    <li><Link to="/UserPanel/PersonalInfo">Personal Information</Link></li>
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login"><i className="fa fa-user"></i>Login</Link>
                            </li>
                        )}
                        <li className="nav-item">
                            <button id="navBtn" onClick={toggleTheme} className={`navBtn ${theme === 'dark' ? 'dark-navBtn' : 'light-navBtn'}`}>
                                {theme === 'dark' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav
