
import React, { useState, useContext } from "react";
import './FAQ.css';
import { ThemeContext } from "../../Context/ThemeContext";



function FAQ() {

    const { theme } = useContext(ThemeContext);
    const [openIndex, setOpenIndex] = useState(null); // State to track which answer is open

    const faqs = [
        {
            question: "What shipping options do you offer?",
            answer: "We offer several shipping options to meet your needs, including standard, expedited, and express shipping. Delivery times vary based on your location and the shipping method selected."
        },
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of receiving your order for a full refund or exchange. Items must be unworn, unwashed, and in their original packaging."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept a variety of payment methods, including major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
        },
        {
            question: "How can I find the right size for clothing?",
            answer: "Each clothing item on our website includes a sizing guide to help you choose the right fit."
        },
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button located at the top right corner of our website."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach us via email at support@Elnagorashop.com or call us at (123) 456-7890."
        },
        {
            question: "Do you offer gift cards?",
            answer: "Yes! We offer digital gift cards that can be purchased directly from our website."
        },
        {
            question: "How can I apply a discount code?",
            answer: "During checkout, you’ll see an option to enter your discount code. Simply input the code and click 'Apply' to see the discount reflected in your total."
        },
        {
            question: "Is my personal information secure?",
            answer: "Absolutely! We take your privacy seriously. Our website uses SSL encryption to protect your information."
        },
        {
            question: "Can I cancel or change my order?",
            answer: "Once an order is placed, we are unable to cancel or make changes to it. Please review your order carefully before submitting it."
        }
    ];

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle the index
    };


    return (
        <>
            <div className={theme === 'dark' ? 'dark-faq' : ''}>
                <div className={theme === 'dark' ? 'faq-section dark-faq-section' : 'faq-section light-faq-section'}>
                    <h1>Frequently Asked Questions (FAQ)</h1>

                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <h3 className="faq-question" onClick={() => toggleAnswer(index)}>
                                {index + 1}. {faq.question}
                            </h3>
                            {openIndex === index && (
                                <div className="faq-answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FAQ;