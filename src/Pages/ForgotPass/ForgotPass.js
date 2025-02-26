
import React, { useContext, useState } from "react";
import './ForgotPass.css';
import { Link } from "react-router-dom";
import Logo from "../../Assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import forgotPass from "../../Assets/images/forgot-password.jpg";
import { UserContext } from "../../Context/UserContext";
import { ThemeContext } from "../../Context/ThemeContext";



function ForgotPass() {

    const { theme } = useContext(ThemeContext);

    const { username } = useContext(UserContext);

    const [email, setEmail] = useState("");

    const navigate = useNavigate();


    const handlePassword = (e) => {

        e.preventDefault();

        console.log(email);

        if (email === "") {
            alert("Please fill in the Email Address field!");
            return;
        }

        alert("The new Password has been reset successfully. Please check your email address!");
        navigate("/Login");
    }



    return (
        <>
            <div className={theme === 'dark' ? 'dark-forget-pass' : 'light-forget-pass'}>
                <div className="forget-pass-container">
                    {username ? (
                        <div className={`prelogin ${theme === 'dark' ? 'dark-prelogin' : 'light-prelogin'}`}>
                            <p>You have already Logged in as a User.</p>
                            <p>To access the Login Form, please Log out first.</p>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="forget-pass-image col-12 col-md-6">
                                <img src={forgotPass} />
                            </div>

                            <div className="forget-pass-form col-12 col-md-6">
                                <div className="forget-pass-title">
                                    <div className="forget-pass-logo">
                                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                                    </div>

                                    <h1>Password Form</h1>

                                    <p>Please enter your Email Address to reset your Password.</p>
                                </div>

                                <div className={`main-pass-form ${theme === 'dark' ? 'dark-main-pass-form' : 'light-main-pass-form'}`}>
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <div class="text-center">
                                                <i class="fa fa-lock fa-4x"></i>
                                                <h2 class="text-center">Forgot Password?</h2>
                                                <p>You can reset your password here.</p>

                                                <form onSubmit={handlePassword} autocomplete="off" class="form" method="post">
                                                    <div data-mdb-input-init class="flex-fill">
                                                        <label class="form-label" for="formEmail"><i class="fa fa-envelope"></i> Email Address</label>

                                                        <input type="email" id="formEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    </div>

                                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className={`forget-pass-btn ${theme === 'dark' ? 'dark-pass-btn' : 'light-pass-btn'}`}>Reset Password</button>

                                                    {/* <input type="hidden" class="hide" name="token" id="token" value="" /> */}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ForgotPass;