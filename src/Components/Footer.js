
import React from "react";
import './Footer.css';
import logo from '../Assets/images/logo.jpg';



function Footer() {
    return (
        <>

        <footer>
                <div className="row">
                    <div className="col-3">
                        <div className="footer-logo">
                            <img src={logo} />
                            <h3>Crystal</h3>
                        </div>

                        <p className="footer-description">Crystal Blog is a blog about crystals. We love crystals and we want to share our knowledge with you. We hope you enjoy our blog.</p>

                        <div className="social-icons">
                            <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-3 footer-subscribe">
                        <h3>Subscribe</h3>
                        <form>
                            <input type="text" placeholder="Your Name" />
                            <br />
                            <input type="email" placeholder="Your Email Address" />
                            <br />
                            <button>Subscribe Now</button>
                        </form>
                    </div>

                    <div className="col-2 footer-list">
                        <h3>Main Links</h3>
                        <ul>
                            <li><a href="/About">About Us</a></li>
                            <li><a href="/Contact">Contact Us</a></li>
                            <li><a href="/Blog">Blog</a></li>
                            <li><a href="/">FAQ</a></li>
                        </ul>
                    </div>

                    <div className="col-2 footer-list">
                        <h3>Sub Links</h3>
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Customer Support</a></li>
                            <li><a href="/">Terms & Conditions</a></li>
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