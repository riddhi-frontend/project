import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
            <h6 className='text-white'>Certified Dealers are contractually obligated by TrueCar to meet certain customer service requirements and complete the TrueCar Dealer Certification Program.TrueCar does not broker, sell, or<br/> lease motor vehicles. Unless otherwise noted, all vehicles shown on this website are offered for sale by licensed motor vehicle dealers. All vehicles are subject to prior<br/> sale. By accessing this website, you agree to the TrueCar Terms of Service and Privacy Policy.</h6>

            <ul className="social-media">
                <li>Contact: </li>
                <li className='ps-3'><a href="#"><FaFacebook/></a></li>
                <li className='ps-3'><a href="#"><BsTwitter/></a></li>
                <li className='ps-3'><a href="#"><BsInstagram/></a></li>
                <li className='ps-3'><a href="#"><BsLinkedin/></a></li>
            </ul>
            
            <div className="footer-bottom"><p>@2024 all rights reserved</p></div>
            </Container>
        </footer>
    );
};

export default Footer