
import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../Assets/images/logo.jpg";


function Register() {
    return (
        <>
            <div className="register-container">
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <div className="title-register">
                    <Link to="/"><img src={logo} alt="Logo" /><h1>Producto Shop</h1></Link>

                    <h1>Register Form</h1>

                    <p>Please create an account to register in our website.</p>
                </div>

                <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-user fa-lg me-3 fa-fw"></i> icon for each label from w3 */}
                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">Your Name</label>
                            <input type="text" id="form3Example1c" class="form-control" />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-envelope fa-lg me-3 fa-fw"></i> icon for each label from w3 */}
                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example3c">Your Email</label>
                            <input type="email" id="form3Example3c" class="form-control" />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-lock fa-lg me-3 fa-fw"></i> icon for each label from w3 */}
                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">Password</label>
                            <input type="password" id="form3Example4c" class="form-control" />
                        </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                        {/* <i class="fas fa-key fa-lg me-3 fa-fw"></i> icon for each label from w3 */}
                        <div data-mdb-input-init class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                            <input type="password" id="form3Example4cd" class="form-control" />
                        </div>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-5">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                        </label>
                    </div>

                    <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg">Register</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Register;