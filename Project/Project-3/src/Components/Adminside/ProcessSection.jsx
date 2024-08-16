import React from 'react'
import { Container } from 'react-bootstrap'
const ProcessSection = () => {
    return (
        <Container>
        <h2 className='pheading'>About The Process</h2>
        <div className="process-section">
            <ul>
                <li>
                    <h3>Select your service</h3>
                    <p>Choose the specific service you need for your car.</p>
                </li>
                <li>
                    <h3>Enter your car details</h3>
                    <p>Provide the necessary information about your car, such as registration number, make, model, and year.</p>
                </li>
                <li>
                    <h3>Book your service</h3>
                    <p>Schedule an appointment for the selected service.</p>
                </li>
                <li>
                    <h3>Pay online and enjoy the service</h3>
                    <p>Make the payment online and enjoy the convenience of the service being provided to your car.</p>
                </li>
            </ul>
            <div className="process-image">
                <img src="https://digital.staff-capital.com/wp-content/uploads/2022/08/Shop_Car_Service_Process-624x420.jpg" alt="Process" />
            </div>
        </div>
    </Container>
    )
}
export default ProcessSection