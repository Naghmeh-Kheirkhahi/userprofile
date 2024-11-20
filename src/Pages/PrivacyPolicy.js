
import React from "react";
import './PrivacyPolicy.css';
import { Link } from "react-router-dom";




function PrivacyPolicy() {
    return (
        <>
            <div className="privacy-policy">
                <h1>Privacy Policy for Crystal Blog</h1>

                <h4><b>Effective Date: </b> 20.11.2024</h4>

                <h4>At <b> Crystal Blog </b>, accessible from <Link to='/'>Crystal-Blog.come</Link>, your privacy is of utmost importance to us. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to protect your information. By using our blog, you agree to the collection and use of information in accordance with this policy.</h4>

                <h3>1. Information We Collect</h3>
                <p>We may collect personal information from you when you visit our blog, subscribe to our newsletter, or engage with our content. The types of information we may collect include:</p>
                <p><i class="fa fa-circle"></i><b> Personal Identification Information: </b> Name, email address, and any other information you provide voluntarily.</p>
                <p><i class="fa fa-circle"></i><b> Usage Data: </b> Information on how you interact with our blog, including your IP address, browser type, pages visited, and time spent on those pages.</p>
                <p><i class="fa fa-circle"></i><b> Cookies: </b> We may use cookies and similar tracking technologies to enhance your experience on our blog.
                </p>

                <br/>

                <h3>2. How We Use Your Information</h3>
                <p>We use the information we collect for various purposes, including:</p>
                <p><i class="fa fa-circle"></i> To provide, maintain, and improve our blog and its content.</p>
                <p><i class="fa fa-circle"></i> To notify you about changes to our blog or any courses and resources we offer.</p>
                <p><i class="fa fa-circle"></i> To send you newsletters, updates, and promotional materials that may interest you (you can opt out at any time).</p>
                <p><i class="fa fa-circle"></i> To analyze usage patterns and improve user experience.</p>

                <br/>

                <h3>3. Data Sharing and Disclosure</h3>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except in the following circumstances:</p>
                <p><i class="fa fa-circle"></i><b> Service Providers: </b> We may share your information with third-party service providers who assist us in operating our blog, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</p>
                <p><i class="fa fa-circle"></i><b> Legal Compliance: </b> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</p>

                <br/>

                <h3>4. Cookies and Tracking Technologies</h3>
                <p>Our blog uses cookies to enhance user experience. Cookies are small data files that are placed on your device. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. However, this may prevent you from taking full advantage of the blog.</p>

                <br/>

                <h3>5. Data Security</h3>
                <p>We prioritize the security of your personal information. We implement a variety of security measures to maintain the safety of your personal information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.</p>

                <br/>

                <h3>6. Your Rights</h3>
                <p>You have the right to:</p>
                <p><i class="fa fa-circle"></i> Access the personal information we hold about you.</p>
                <p><i class="fa fa-circle"></i> Request corrections to any inaccuracies in your personal information.</p>
                <p><i class="fa fa-circle"></i> Request the deletion of your personal information, subject to certain exceptions.</p>
                <p><i class="fa fa-circle"></i> Withdraw your consent to receive communications from us at any time.</p>

                <br/>

                <h3>7. Changes to This Privacy Policy</h3>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>

                <br/>

                <h3>8. Contact Us</h3>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p><i class="fa fa-circle"></i><b> Email address:</b> Crystal-Blog@gemail.com</p>
                <p><i class="fa fa-circle"></i><b> Phone number:</b> +4915758493654</p>
                <p><i class="fa fa-circle"></i><b> Mailing Address:</b> Vetterstreet 54, room 514, Chemnitz 09126, Germany</p>


                <br/>
                <h4><b>Thank you for visiting Crystal Blog!</b></h4>
            </div>
        </>
    )
}

export default PrivacyPolicy;