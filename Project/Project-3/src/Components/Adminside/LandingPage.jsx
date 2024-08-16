import React from 'react'
import { FaCar, FaChargingStation } from "react-icons/fa"
import { BiSolidCarGarage } from "react-icons/bi"
const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="overlay">
                <div className="content">
                    <h1>Car buying shaped to your life</h1>
                    <div className="buttons">
                        <button className="shop-button new"><span><FaCar/></span><br/>Shop New &gt;</button>
                        <button className="shop-button used"><span><BiSolidCarGarage /></span><br/>Shop Used &gt;</button>
                        <button className="shop-button electric"><span><FaChargingStation/></span><br/>Shop Electric &gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage