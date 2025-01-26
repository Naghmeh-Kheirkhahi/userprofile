
import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import register from "../../Assets/images/register.jpg";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";




function Register() {

    const { theme } = useContext(ThemeContext);

    const { username, setUsername } = useContext(UserContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formUsername, setFormUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();


    const handleRegister = (e) => {

        e.preventDefault();

        console.log(name, email, formUsername, password, confirmPassword);

        if (name !== "" && email !== "" && formUsername !== "" && password !== "" && confirmPassword !== "") {
            if (password !== confirmPassword) {
                alert("The Passwords do not match. Please try again!");
                return;
            }

            setUsername(formUsername);
            alert("Your Registration has been Successfully done!");
            navigate("/Login");
        } else {
            alert("Please fill all the fields!");
        }
    }





    return (
        <>
            <div className={theme === 'dark' ? 'dark-register' : 'light-register'}>
                <div className="register-container">
                    {username ? (
                        <div className={theme === 'dark' ? 'prelogin dark-prelogin' : 'prelogin light-prelogin'}>
                            <p>You have already Logged in as a User.</p>
                            <p>To access the Login Form, please Log out first.</p>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="register-image col-12 col-md-6">
                                <img src={register} />
                            </div>


                            <div className="register-form col-12 col-md-6">
                                <div className="register-title">
                                    <div className="register-logo">
                                        <Link to="/"><img src={logo} alt="Logo" />
                                            <h1>Producto Shop</h1>
                                        </Link>
                                    </div>

                                    <h1>Register Form</h1>

                                    <p>Please create an account to register in our website.</p>
                                </div>

                                <form onSubmit={handleRegister} className={theme === 'dark' ? 'main-register-form dark-main-register-form' : 'main-register-form light-main-register-form'}>

                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formName"><i class="fa fa-user"></i> Name</label>
                                        <input type="text" id="formName" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formEmail"><i class="fa fa-envelope"></i> Email Address</label>
                                        <input type="email" id="formEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formUsername"><i class="fa fa-envelope"></i> Username</label>
                                        <input type="text" id="formUsername" value={formUsername} onChange={(e) => setFormUsername(e.target.value)} />
                                    </div>

                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formPass"><i class='fas fa-lock'></i> Password</label>
                                        <input type="password" id="formPass" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                    <div data-mdb-input-init class="flex-fill mb-4">
                                        <label class="form-label" for="formRePass"><i class='fas fa-key'></i> Repeat your password</label>
                                        <input type="password" id="formRePass" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                    </div>

                                    <div class="register-checkBox">
                                        <input class="form-check-input" type="checkbox" value="" id="formCheck" />
                                        <label class="form-check-label" for="formCheck">
                                            I agree all statements in <a href="#!">Terms of service</a>
                                        </label>
                                    </div>

                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className={theme=== 'dark' ? 'register-btn dark-register-btn' : 'register-btn light-register-btn'}>Register</button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Register;