import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.jpg';
import './Nav.css';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';


function Nav() {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const { username } = useContext(UserContext);


    return (
        <div className='mainMenu'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid position-relative">
                    <Link class="navbar-brand navLogo" to="/"><img src={logo} alt="Logo" /></Link>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="active navLink" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="navLink" to="/Contact">Contact Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="navLink" to="/About">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    {username ? (
                        <div className='navDropdown'>
                            <Link className='navLogin' to='/UserPanel'><i class="fa fa-user"></i> {username}</Link>
                            <ul>
                                <li><Link to='/UserPanel/Orders'>Orders</Link></li>
                                <li><Link to='/UserPanel/Address'>Address</Link></li>
                                <li><Link to='/UserPanel/Payment'>Payment List</Link></li>
                                <li><Link to='/UserPanel/Interests'>Interests</Link></li>
                                <li><Link to='/UserPanel/PersonalInfo'>Personal Information</Link></li>
                            </ul>
                        </div>
                    ) : (
                        <Link className='navLogin' to='/Login'><i class="fa fa-user"></i> Login</Link>
                    )}

                    <button id='navBtn' onClick={toggleTheme} className={theme === 'dark' ? 'dark-navBtn' : 'navBtn'}>
                        {theme === 'dark' ? <i class='fas fa-moon'></i> : <i class='fas fa-sun'></i>} Theme
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Nav
