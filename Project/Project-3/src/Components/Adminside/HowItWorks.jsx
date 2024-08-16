import React from 'react';

const steps = [
    {
        number: '1',
        title: "You're in total control",
        description: 'Shop at your own pace and choose from a large selection of new and used vehicles.',
    },
    {
        number: '2',
        title: 'Find the right financing',
        description: 'See your actual monthly payment and select the lender that fits you best.',
    },
    {
        number: '3',
        title: 'Receive your car',
        description: 'Schedule delivery (for used cars only) or pickup, to begin enjoying your new ride!',
    },
]

const HowItWorks = () => {
    return (
        <div className="how-it-works-container">
            <h2>How does True<span className="multicolor-letter">Car</span>+ work?</h2>
            <div className="steps-container">
                {steps.map((step, index) => (
                <div key={index} className="step-card">
                    <div className="step-number">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                </div>
                ))}
            </div>
            <button className="buy-online-button">Buy online</button>
        </div>
    )
}

export default HowItWorks