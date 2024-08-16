import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const faqs = [
    { question: 'What Are The Different  Services Available?', answer: ' provides a diverse range of services: Challan Check & Pay, Car Service History, RTO Records, etc.' },
    { question: 'Does  Fulfill These Services?', answer: 'Yes,  fulfills all the services mentioned on the website with utmost dedication and precision.' },
    { question: 'Can I Receive Updates/Reminders For My Car Service?', answer: 'Yes, you can receive updates and reminders for your car service by opting for notifications during the booking process.' },
    { question: 'How Can I Cancel A  Service?', answer: 'You can cancel a  service by contacting our support team through the website.' },
]

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <>
        <Navbar/>
        <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faqs">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-card">
                        <h3 onClick={() => toggleFAQ(index)}> {faq.question} <span>{activeIndex === index ? '-' : '+'}</span></h3>
                        {activeIndex === index && <p>{faq.answer}</p>}
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default FAQSection