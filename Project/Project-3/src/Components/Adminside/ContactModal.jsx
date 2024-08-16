import React from 'react';
import { CloseButton } from 'react-bootstrap';

// const ContactModal = ({isOpen, car, onRequestClose }) => {
//   if (!car) return null;

  const ContactModal = ({ isOpen, onRequestClose, car}) => {
    if (!isOpen || !car) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>
          Contact Seller for {car.name} 
          <CloseButton className="closebtn" onClick={onRequestClose} />
        </h2>
        <p>Please fill out the form below to contact the seller.</p>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Contact Number:</label>
            <input type="number" name="number" required />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;