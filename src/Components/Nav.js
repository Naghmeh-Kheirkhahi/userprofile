import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/images/logo.jpg';
import './Nav.css';


function Nav() {
    return (
        <div className='mainMenu'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img src={logo} alt="Logo"/></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
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
                </div>
            </nav>
        </div>
    )
}

export default Nav
