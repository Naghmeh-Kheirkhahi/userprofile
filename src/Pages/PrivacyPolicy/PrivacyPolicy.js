
import React, { useContext } from "react";
import './PrivacyPolicy.css';
import { ThemeContext } from "../../Context/ThemeContext";



function PrivacyPolicy() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className={theme === 'dark' ? 'dark-privacy-policy' : 'light-privacy-policy'}>
                <div className="privacy-policy-container">
                    <div>
                        <h1>Privacy Policy of Producto Shop</h1>
                        <h5>Creating a privacy policy for your shopping website is essential to inform users about how their data is collected, used, and protected. Here’s a general outline you can follow:</h5>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>1. Introduction: </b> Briefly explain the purpose of the privacy policy and your commitment to protecting user privacy.</h4>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>2. Information We Collect: </b> Detail the types of personal information collected, such as:</h4>
                        <p><i class="fa fa-circle"></i> Name</p>
                        <p><i class="fa fa-circle"></i> Email addresses</p>
                        <p><i class="fa fa-circle"></i> Shipping addresses</p>
                        <p><i class="fa fa-circle"></i> Payment information</p>
                        <p><i class="fa fa-circle"></i> Browsing history and preferences</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>3. How We Use Your Information: </b> Explain the purposes for which the information is used, including:</h4>
                        <p><i class="fa fa-circle"></i> Processing orders</p>
                        <p><i class="fa fa-circle"></i> Improving customer service</p>
                        <p><i class="fa fa-circle"></i> Personalizing user experience</p>
                        <p><i class="fa fa-circle"></i> Sending periodic emails regarding orders or promotions</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>4. Data Sharing and Disclosure: </b> Clarify if and how user information is shared with third parties, such as:</h4>
                        <p><i class="fa fa-circle"></i> Payment processors</p>
                        <p><i class="fa fa-circle"></i> Shipping companies</p>
                        <p><i class="fa fa-circle"></i> Marketing partners</p>
                        <p><i class="fa fa-circle"></i> Mention any legal obligations to disclose information.</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>5. Cookies and Tracking Technologies: </b> Describe the use of cookies and similar technologies, including:</h4>
                        <p><i class="fa fa-circle"></i> What types of cookies are used e.g. session cookies and persistent cookies</p>
                        <p><i class="fa fa-circle"></i>The purpose of cookies to enhance user experience, analyze site traffic</p>
                        <p><i class="fa fa-circle"></i> How users can manage cookie preferences.</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>6. Data Security: </b> Outline the measures taken to protect user data, such as:</h4>
                        <p><i class="fa fa-circle"></i> Encryption methods</p>
                        <p><i class="fa fa-circle"></i> Secure servers</p>
                        <p><i class="fa fa-circle"></i> Regular security audits</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>7. User Rights: </b> Inform users of their rights regarding their personal information, including:</h4>
                        <p><i class="fa fa-circle"></i> The right to access their data</p>
                        <p><i class="fa fa-circle"></i> The right to request deletion of their data</p>
                        <p><i class="fa fa-circle"></i> The right to opt-out of marketing communications</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>8. Changes to This Privacy Policy: </b> State how users will be informed of changes to the privacy policy, such as:</h4>
                        <p><i class="fa fa-circle"></i> Posting updates on the website</p>
                        <p><i class="fa fa-circle"></i> Sending notifications via email</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>9. Contact Information: </b> Provide contact details for users to reach out with questions or concerns about the privacy policy, including:</h4>
                        <p><i class="fa fa-circle"></i><b> Email address:</b> Producto-Shop@gemail.com</p>
                        <p><i class="fa fa-circle"></i><b> Phone number:</b> +4915758493654</p>
                        <p><i class="fa fa-circle"></i><b> Mailing Address:</b> Vetterstreet 54, room 514, Chemnitz 09126, Germany</p>
                    </div>

                    <div className="mb-md-3 mb-lg-4">
                        <h4><b>10. Effective Date: </b>Include the date when the privacy policy becomes effective.</h4>
                    </div>

                    <div>
                        <p><span class="fa fa-star"></span> This structure will help ensure that your privacy policy is comprehensive, clear, and compliant with relevant data protection laws.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;