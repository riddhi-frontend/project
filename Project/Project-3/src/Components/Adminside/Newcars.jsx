import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import carsData from './CarsData';
import ContactModal from './ContactModal';

const Newcars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterFuelType, setFilterFuelType] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    city: '',
    message: '',
    submitted: false,
  });
  const [errors, setErrors] = useState({});

  // Filtered cars based on search term and fuel type
  const filteredCars = carsData.filter((car) => {
    return (
      (car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.location.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterFuelType ? car.fuelType === filterFuelType : true)
    );
  });

  // Handle opening the contact modal
  const handleContactSeller = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
    setFormData({
      name: '',
      email: '',
      contact: '',
      city: '',
      message: '',
      submitted: false,
    });
    setErrors({});
  };

  // Validate form data
  const validate = () => {
    const validationErrors = {};
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.contact) validationErrors.contact = 'Contact number is required and must be at least 10 characters long';
    if (!formData.city) validationErrors.city = 'City is required';
    if (!formData.message) validationErrors.message = 'Message is required';
    return validationErrors;
  };

  return (
    <>
      <Navbar />
      <div className="car-listing-container">
        <div className="filters">
          <input
            type="text"
            placeholder="Search by car name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={filterFuelType} onChange={(e) => setFilterFuelType(e.target.value)}>
            <option value="">All Fuel Types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className="car-list">
          {filteredCars.map((car) => (
            <div key={car.id} className="car-item">
              <h3>{car.name}</h3>
              <p>Price: ₹{car.price.toLocaleString()}</p>
              <p>Year: {car.year}</p>
              <p>Fuel Type: {car.fuelType}</p>
              <p>Kilometers: {car.kilometersRun.toLocaleString()} km</p>
              <p>Location: {car.location}</p>
              <button className="contact-seller-btn" onClick={() => handleContactSeller(car)}>
                Contact Seller
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <ContactModal
  isOpen={isModalOpen}
  onRequestClose={() => setIsModalOpen(false)} // This should close the modal
  car={selectedCar}
  formData={formData}
  errors={errors}
  handleChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
  handleSubmit={(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormData({ ...formData, submitted: true });
    }
  }}
/>

    </>
  );
};

export default Newcars;
