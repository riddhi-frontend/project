import React from 'react'

const services = [
    { title: 'Challan Check', description: 'Check your challan online for free and pay your car challan in the minimum possible time.', price: '₹ 0', buttonText: 'View Challan Details' },
    { title: 'Car Service History', description: 'Get OEM-verified service history for your car, including information on odometer readings, servicing, and repairs.', price: '₹ 299', discount: '40% OFF', buttonText: 'Get Report' },
    { title: 'Allianz Assistance RSA Services', description: 'Allianz Assistance RSA Services offers peace of mind for unexpected breakdowns, flat tires, and battery problems.', price: '₹ 2,018', discount: '11.45% OFF', buttonText: 'Buy Now' },
];

const ServiceList = () => {
    return (
        <div className="service-list">
            <h2>Buy Price-Effective Services</h2>
            <div className="services">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <p className="price">{service.price} <span>{service.discount}</span></p>
                        <button>{service.buttonText}</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ServiceList
