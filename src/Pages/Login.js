
import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.jpg";



function Login() {
    return (
        <>
            <div className="login-container">
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

                <div className="title-login">
                    <Link to="/"><img src={logo} alt="Logo" /><h1>Producto Shop</h1></Link>

                    <h1>Login Form</h1>

                    <p>Please enter your email address and password.</p>
                </div>

                <form>
                    {/* Email input */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" />
                    </div>

                    {/* Password input */}
                    <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" />
                    </div>

                    {/* 2 column grid layout for inline styling */}
                    <div class="row mb-4">
                        <div class="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div class="col">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    {/* Submit button */}
                    <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4">Login</button>

                    {/* Register buttons */}
                    <div class="text-center">
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

        </>
    )
}

export default Login;