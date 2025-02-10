
import React, { useContext } from "react";
import './TandC.css'; // TandC means Terms and Conditions
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../Context/ThemeContext";


function TandC() {

    const { theme } = useContext(ThemeContext);

    return (
        <>

            <div className={theme === 'dark' ? 'dark-TandC' : 'light-TandC'}>
                <div className="TandC-container">
                    <div className="mb-md-2 mb-lg-3">
                        <h1>Terms and Conditions of Elnagora Shop</h1>
                        <h5>Welcome to Elnagora Shop! These Terms and Conditions outline the rules and regulations for the use of our website located at <Link to={'/'} style={{ color: theme === 'dark' ? 'rgb(187, 116, 232)' : 'rgb(121, 30, 177)' }}><b>Elnagora-Shop.com</b></Link>. By accessing this website, you agree to comply with these terms. If you do not agree with any part of these terms, please do not use our website.</h5>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>1. Acceptance of Terms</h3> <p>By accessing and using Elnagora Shop, you accept and agree to be bound by these Terms and Conditions. We reserve the right to modify these terms at any time, and your continued use of the website constitutes acceptance of the updated terms.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>2. Use of Content</h3> <p>All content provided on Elnagora Shop, including text, images, and videos, is for informational purposes only. You may not reproduce, distribute, or republish any content without our prior written consent.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>3. User Responsibilities</h3> <p>You are responsible for your own conduct while using the website and for any product you present. You agree not to present any product that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>4. Intellectual Property</h3> <p>All intellectual property rights in the content of Elnagora Shop are owned by us or our licensors. This includes, but is not limited to, copyright, trademarks, and patents. You may not use any of our intellectual property without express permission.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>5. Links to Other Websites</h3> <p>Our website may contain links to third-party websites that are not owned or controlled by Elnagora Shop. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. We recommend reviewing the terms and conditions and privacy policies of any third-party sites you visit.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>6. Limitation of Liability</h3> <p>In no event shall Elnagora Shop, nor its owners, employees, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or any content therein.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>7. Governing Law</h3> <p>These Terms and Conditions shall be governed by and construed in accordance with the laws of Germany. Any disputes arising from these terms shall be resolved in the courts of German Jurisdiction.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>8. Changes to Terms</h3> <p>We reserve the right to update or change these Terms and Conditions at any time. We will notify you of any changes by posting the new terms on this page. It is your responsibility to review these terms periodically for any changes.</p>
                    </div>

                    <div className="mb-md-2 mb-lg-3">
                        <h3>9. Contact Information</h3> <p>If you have any questions about these Terms and Conditions, please contact us by refering to the <Link to={'/Contact'}><b>contact form</b></Link>.</p>
                    </div>

                    <div className="mb-md-3 mb-lg-5">
                        <h3>10. Acknowledgement</h3> <p>These Terms and Conditions have been created with the help of the <a href="https://www.termsandconditionsgenerator.com"><b>Terms and Conditions Generator</b></a>.</p>
                    </div>

                    <div>
                        <h5><span class="fa fa-star"></span> By using Elnagora Shop, you acknowledge that you have read, understood, and agree to these Terms and Conditions.</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TandC;