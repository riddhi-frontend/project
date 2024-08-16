import React from 'react'
import { IoIosGift } from "react-icons/io"
import { FaCarAlt } from "react-icons/fa"
import { BsCart4 } from "react-icons/bs"

const features = [
    {
        icon: <BsCart4/>,
        title: 'Transparent pricing',
        subtitle: "No surprises here. See how much you'll pay on cars you like.",
    },
    {
        icon: <FaCarAlt/>,
        title: 'Minutes, not hours',
        subtitle: 'Time-saving tools to help you find the right car in a snap.',
    },
    {
        icon: <IoIosGift/>,
        title: 'Shop your way',
        subtitle: "Your own pace, your own space. Shop online where and when it's convenient for you.",
    },
];

const WhyTrueCar = () => {
    return (
        <div className="why-truecar-container">
            <h2>Why TrueCar?</h2>
        <div className="why-truecar-cards">
            {features.map((feature, index) => (
            <div key={index} className="why-truecar-card">
                <div className="why-truecar-icon">{feature.icon}</div>
                <div className="why-truecar-text">
                    <div className="why-truecar-title">{feature.title}</div>
                    <div className="why-truecar-subtitle">{feature.subtitle}</div>
                </div>
            </div>
            ))}
        </div>
        <button className="why-truecar-sign-up-button">Sign up</button>
    </div>
    );
};

export default WhyTrueCar
