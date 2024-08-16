import React from 'react'
import { GiLaurelsTrophy } from "react-icons/gi"
import { MdDirectionsCar, MdLocalOffer } from "react-icons/md"
import { FaCodeCompare } from "react-icons/fa6"
const features = [
    {
        icon: <GiLaurelsTrophy/>,
        title: "India's #1",
        subtitle: 'Largest Auto portal',
    },
    {
        icon: <MdDirectionsCar/>,
        title: 'Car Sold',
        subtitle: 'Every 10 minutes',
    },
    {
        icon: <MdLocalOffer/>,
        title: 'Offers',
        subtitle: 'Stay updated pay less',
    },
    {
        icon: <FaCodeCompare/>,
        title: 'Compare',
        subtitle: 'Decode the right car',
    },
];

const FeatureCard = () => {
    return (
        <div className="feature-container">
            {features.map((feature, index) => (
            <div key={index} className="feature-card">
                <div className="ficon">{feature.icon}</div>
                <div className="text">
                    <div className="title">{feature.title}</div>
                    <div className="subtitle">{feature.subtitle}</div>
                </div>
            </div>
        ))}
        </div>
    )
}
export default FeatureCard