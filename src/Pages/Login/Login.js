
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import login from "../../Assets/images/login.jpg";
import { UserContext } from "../../Context/UserContext";
import { ThemeContext } from "../../Context/ThemeContext";



function Login() {

    const { theme } = useContext(ThemeContext);

    const { username, setUsername } = useContext(UserContext); // here we are using the setUsername from the UserContext because we want to set the username when the user logs in.

    const [formUsername, setFormUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        console.log(formUsername, password);

        // We can use this code block when we want to check the username, email and password, but here we have no API of user data to search and check through it. So, we have to either consider a constant data for the condition like the following code or write no condition and make the Login free as the user enter any data they like.

        // if (formUsername === "admin" && password === "userpass") {

        //     setUsername(formUsername);
        //     alert("Login has been successfully done!");
        //     navigate("/UserPanel");  // navigate("/DisplayUsername"); when we want to navigate to this page

        // } else {
        //     alert("Your Email or Password is invalid. Please try again!");
        // }


        // This code block is for the case when we don't want to check the username, email and password and make the Login free as the user enter any data they like.

        if (formUsername === "" || password === "") {
            alert("Please fill all the fields!");
            return;
        }

        setUsername(formUsername);
        alert("Login has been successfully done!");
        navigate("/UserPanel");
    };




    return (
        <>
            <div className={theme === 'dark' ? 'dark-login' : 'light-login'}>
                <div className="login-container">
                    {username ? (
                        <div className={`prelogin ${theme === 'dark' ? 'dark-prelogin' : 'light-prelogin'}`}>
                            <p>You have already Logged in as a User.</p>
                            <p>To access the Login Form, please Log out first.</p>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="login-image col-12 col-md-6">
                                <img src={login} />
                            </div>

                            <div className="login-form col-12 col-md-6">
                                <div className="login-title">
                                    <div className="login-logo">
                                        <Link to="/"><img src={logo} alt="Logo" />
                                            <h1>Elnagora Shop</h1>
                                        </Link>
                                    </div>

                                    <h1>Login Form</h1>

                                    <p>Please enter your Username and Password.</p>
                                </div>

                                <form onSubmit={handleLogin} className={`main-login-form ${theme === 'dark' ? 'dark-main-login-form' : 'light-main-login-form'}`}>
                                    {/* Username input */}
                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formEmail"><i class="fa fa-envelope"></i> Username</label>
                                        <input type="text" id="formUsername" value={formUsername} onChange={(e) => setFormUsername(e.target.value)} />
                                    </div>

                                    {/* Password input */}
                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formPass"><i class='fas fa-lock'></i> Password</label>
                                        <input type="password" id="formPass" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    {/* 2 column grid layout for inline styling */}
                                    <div class="row text-center">
                                        <div class="col-6 col-md-12 col-lg-6 d-flex justify-content-center">
                                            {/* Checkbox */}
                                            <div class="login-checkBox">
                                                <input class="form-check-input" type="checkbox" value="" id="formCheck" />
                                                <label class="form-check-label" for="formCheck"> Remember me </label>
                                            </div>
                                        </div>

                                        <div class="col-6 col-md-12 col-lg-6 login-forget-pass">
                                            {/* Simple link */}
                                            <a href="/ForgotPass">Forgot password?</a>
                                        </div>
                                    </div>

                                    {/* Submit button */}
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className={`login-btn ${theme=== 'dark' ? 'dark-login-btn' : 'light-login-btn'}`}>Login</button>


                                    {/* Register buttons */}
                                    <div className="login-socialmedia">
                                        <p>Don't have an account? <Link to={'/Register'}>Register</Link></p>
                                        <p>or sign up with:</p>

                                        <div className="socialmedia-icon">
                                            <a><i class="fab fa-facebook-f"></i></a>
                                            <a><i class="fab fa-google"></i></a>
                                            <a><i class="fab fa-twitter"></i></a>
                                            <a><i class="fab fa-github"></i></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Login;