
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import './About.css';


function About() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="main-aboutUs">
                <div className={theme === 'dark' ? 'dark-about' : ''}>
                    <div className="aboutUs">
                        <div className="mb-md-3 mb-lg-4">
                            <h1>About US</h1>
                            <p>Welcome to <b>Elnagora Shop App</b>, where shopping meets style, convenience, and innovation. Since our inception, our mission has been simple: to offer a wide selection of quality products that fit seamlessly into your lifestyle, without breaking the bank. We take pride in being your go-to destination for everything from men’s and women’s clothing to elegant jewelry and the latest in electronics.</p>
                        </div>

                        <div className="mb-md-2 mb-lg-3">
                            <h2>Our Story</h2>
                            <p>At <b>Elnagora Shop App</b>, we believe that shopping should be an enjoyable and inspiring experience. Whether you're updating your wardrobe with fashionable new pieces, searching for a thoughtful gift, or looking for the latest tech gadgets, we are here to cater to your every need. What began as a small passion project has grown into a full-fledged marketplace that serves customers around the world.

                                We’ve curated a diverse collection of men’s clothing, ranging from casual essentials to sleek, professional attire, ensuring you always find something that suits your style. Our women’s fashion is equally diverse, featuring everything from everyday wear to statement pieces that help you stand out.

                                For those looking to add a touch of elegance, our handpicked jewelry collection offers timeless designs that complement any outfit—whether you’re going for understated chic or bold and glamorous.

                                And if you're a tech enthusiast, our electronics section is filled with innovative products designed to make your life easier, more efficient, and more connected. From the latest gadgets to everyday electronics, we make sure you're always ahead of the curve.</p>
                        </div>

                        <div className="mb-md-2 mb-lg-3">
                            <h2>Why Shop With Us?</h2>
                            <p>We know that in today’s fast-paced world, convenience is key. That’s why we’ve designed <b>Elnagora Shop App</b> to provide a seamless shopping experience from start to finish. We offer a wide variety of products, carefully selected to meet the highest standards of quality, durability, and style. Our easy-to-navigate website ensures you can find what you’re looking for quickly, whether you're at home or on the go.

                                But we don’t stop there. At <b>Elnagora Shop App</b>, customer satisfaction is at the heart of everything we do. We are dedicated to providing exceptional service from the moment you visit our site to the moment your order arrives at your doorstep. Our friendly customer support team is always ready to assist you with any questions or concerns.</p>
                        </div>

                        <div className="mb-md-2 mb-lg-3">
                            <h2>Our Commitment</h2>
                            <p>We understand that shopping online can sometimes feel impersonal, but at <b>Elnagora Shop App</b>, we strive to build a personal connection with our customers. We are committed to offering not only the best products but also an experience that leaves you feeling valued. That’s why we go the extra mile to offer:</p>

                            <ul>
                                <li>* Affordable prices without compromising on quality</li>
                                <li>* Fast and reliable shipping so you get your products on time</li>
                                <li>* Easy returns and exchanges for a stress-free shopping experience</li>
                                <li>* Secure payment options to ensure your information is protected</li>
                            </ul>
                        </div>

                        <div className="mb-md-2 mb-lg-3">
                            <h2>Join Our Community</h2>
                            <p>At <b>Elnagora Shop App</b>, we don’t just see ourselves as a store—we see ourselves as part of a larger community. We love to engage with our customers, hear your feedback, and see how you’re styling our products or using our electronics in your daily life. Be sure to follow us on social media and sign up for our newsletter to stay updated on the latest trends, special promotions, and exclusive deals.

                                Thank you for choosing <b>Elnagora Shop App</b>. We’re honored to be a part of your shopping journey, and we look forward to serving you for years to come.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default About;