
import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import login from "../../Assets/images/login.jpg";
import { UserContext } from "../../Context/UserContext";



function Login() {

    const { setUsername } = useContext(UserContext);
    
    const [formUsername, setFormUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = (e) => {

        e.preventDefault();

        console.log(formUsername, email, password);

        // We can use this code block when we want to check the username, email and password, but here we have no API of user data to search and check through it. So, we have to either consider a constant data for the condition like the following code or write no condition and make the Login free as the user enter any data they like.

        // if (formUsername === "admin" && email === "useremail@gmail.com" && password === "userpass") {
        //     setUsername(formUsername);

        //     console.log("Logged in as: " + formUsername);

        //     alert("Login has been successfully done!");

        //     // navigate("/DisplayUsername"); when we want to navigate to this page
        //     navigate("/UserPanel");
            
        // } else {
        //     alert("Your Email or Password is invalid. Please try again!");
        // }


        // This code block is for the case when we don't want to check the username, email and password and make the Login free as the user enter any data they like.
        
        setUsername(formUsername);

        alert("Login has been successfully done!");

        navigate("/UserPanel");
    };



    return (
        <>
            <div className="login-main">
                <div className="login-container">
                    <div className="row">
                        <div className="login-image col-6">
                            <img src={login} />
                        </div>


                        <div className="login-form col-6">
                            <div className="login-heading">
                                <div className="login-logo">
                                    <Link to="/"><img src={logo} alt="Logo" />
                                        <h1>Producto Shop</h1>
                                    </Link>
                                </div>

                                <h1>Login Form</h1>

                                <p>Please enter your email address and password.</p>
                            </div>

                            <form onSubmit={handleLogin}>
                                {/* Username input */}
                                <div data-mdb-input-init class="flex-fill mb-4">
                                    <label class="form-label" for="formEmail"><i class="fa fa-envelope"></i> Username</label>
                                    <input type="text" id="formUsername" value={formUsername} onChange={(e) => setFormUsername(e.target.value)} />
                                </div>

                                {/* Email input */}
                                <div data-mdb-input-init class="flex-fill mb-4">
                                    <label class="form-label" for="formEmail"><i class="fa fa-envelope"></i> Email address</label>
                                    <input type="email" id="formEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                {/* Password input */}
                                <div data-mdb-input-init class="flex-fill mb-4">
                                    <label class="form-label" for="formPass"><i class='fas fa-lock'></i> Password</label>
                                    <input type="password" id="formPass" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                {/* 2 column grid layout for inline styling */}
                                <div class="row mb-4 text-center">
                                    <div class="col-6 d-flex justify-content-center">
                                        {/* Checkbox */}
                                        <div class="checkBox">
                                            <input class="form-check-input" type="checkbox" value="" id="formCheck" />
                                            <label class="form-check-label" for="formCheck"> Remember me </label>
                                        </div>
                                    </div>

                                    <div class="col-6 forget-pass">
                                        {/* Simple link */}
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                {/* Submit button */}
                                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="login-btn">Login</button>

                                {/* Register buttons */}
                                <div class="login-end">
                                    <p>Don't have an account? <Link to={'/Register'}>Register</Link></p>
                                    <p>or sign up with:</p>
                                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-facebook-f"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;