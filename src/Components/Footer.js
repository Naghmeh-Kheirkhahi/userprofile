
import React from "react";
import './Footer.css';
import logo from '../Assets/images/logo.jpg';
import { Link } from "react-router-dom";



function Footer() {
    return (
        <>

        <footer>
                <div className="row">
                    <div className="col-3">
                        <div className="footer-logo">
                            <img src={logo} />
                            <h3>Producto Shop</h3>
                        </div>

                        <p className="footer-description">Producto Shop is a website about a wide verity of products. We present different products in four categories in detail. We hope you enjoy our shopping website.</p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-3 footer-subscribe">
                        <h3>Subscribe</h3>

                        <div className="subscribe-form">
                            <input type="text" placeholder="Your Name" />
                            <br />
                            <input type="email" placeholder="Your Email Address" />
                            <br />
                            <button>Subscribe Now</button>
                        </div>
                    </div>

                    <div className="col-2 footer-list">
                        <h3>Main Links</h3>
                        <ul>
                            <li><Link to="/About">About Us</Link></li>
                            <li><Link to="/Contact">Contact Us</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                        </ul>
                    </div>

                    <div className="col-2 footer-list">
                        <h3>Sub Links</h3>
                        <ul>
                            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
                            <li><Link to="/CustomerSupport">Customer Support</Link></li>
                            <li><Link to="/T&C">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    <div className="col-2 footer-list">
                        <h3>Categories</h3>
                        <ul>
                            <li><a href="/">Men's Clothing</a></li>
                            <li><a href="/">Women's Clothing</a></li>
                            <li><a href="/">Jewerly</a></li>
                            <li><a href="/">Electronics</a></li>
                        </ul>
                    </div>
                </div>


                <div className="footer-bottom">
                    <p>© 2024 Producto Shop by Naghmeh Kheirkhahi. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}


export default Footer;