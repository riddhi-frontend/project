import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        contactNumber: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'contactNumber') {
            const contactNumberPattern = /^[0-9]{10}$/;
            if (!contactNumberPattern.test(e.target.value)) {
                setErrors({
                    ...errors,
                    contactNumber: 'Contact number must be 10 digits long.'
                });
            } else {
                setErrors({
                    ...errors,
                    contactNumber: ''
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errors.contactNumber) {
            // Handle form submission logic here
            console.log('Form submitted:', formData);
            // Reset form fields
            setFormData({
                name: '',
                email: '',
                contactNumber: '',
                subject: '',
                message: ''
            });
        } else {
            console.log('Form contains errors');
        }
    };

    return (
        <>
        <Navbar/>
                <div className="contact">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="contactNumber">Contact Number</label>
                    <input
                        type="tel"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                    {errors.contactNumber && (
                        <span className="error">{errors.contactNumber}</span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default Contact;
