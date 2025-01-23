
import React, { useContext } from "react";
import './CustomerSupport.css';
import { ThemeContext } from "../../Context/ThemeContext";



function CustomerSupport() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={theme === 'dark' ? 'dark-customer-support' : 'light-customer-support'}>
                <div className="customer-support-container">
                    <div className="mb-md-2 mb-lg-3">
                        <h1>Custmer Support of Producto Shop</h1>
                        <h6>Welcome to our Customer Support page! We are dedicated to providing you with the best possible shopping experience, and our support team is here to assist you with any questions or concerns you may have.</h6>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h2>How can we help you?</h2>
                        <p>Whether you have inquiries about your order, need help with returns or exchanges, or require assistance with our website, we are here to help. Our support team is available to guide you through any issues you may encounter.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h2>Contact us</h2>
                        <p>If you need immediate assistance, please reach out to our customer support team through one of the following methods:</p>
                        <p><i class="fa fa-circle"></i><b> Email address:</b> Producto-Shop@gemail.com</p>
                        <p><i class="fa fa-circle"></i><b> Phone number:</b> +4915758493654</p>
                        <p><i class="fa fa-circle"></i><b> Live Chat:</b> Click the chat icon on the bottom right corner of the page for instant support.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h2>Frequently Asked Questions (FAQs)</h2>
                        <p>Before reaching out, you may find the answers to your questions in our FAQs section. Here are some common topics:</p>
                        <p><i class="fa fa-circle"></i> <b>Order Status:</b> How can I track my order?</p>
                        <p><i class="fa fa-circle"></i> <b>Returns:</b> What is your return policy?</p>
                        <p><i class="fa fa-circle"></i> <b>Shipping:</b> How long does shipping take?</p>
                        <p><i class="fa fa-circle"></i> <b>Payment Issues:</b> What payment methods do you accept?</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h2>Feedback</h2>
                        <p>Your feedback is important to us! If you have suggestions on how we can improve our service, please let us know. We strive to enhance your shopping experience every day.</p>
                    </div>

                    <div>
                        <h6>Thank you for choosing our website. We appreciate your business and look forward to assisting you!</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustomerSupport;