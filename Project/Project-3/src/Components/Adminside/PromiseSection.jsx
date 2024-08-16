import React from 'react'

const promises = [
    { title: 'Privacy', description: 'Personal information and car records are kept strictly confidential.' },
    { title: 'Support', description: 'Dedicated team available to assist you with any car-related queries.' },
    { title: 'Instant Service', description: 'Rev up your convenience! Book car services anytime, anywhere, with Instant Service at your fingertips!' },
    { title: 'Fair Price', description: 'Enjoy transparent pricing and value for money services.' },
];

const PromiseSection = () => {
    return (
        <div className="promise-section">
            <h2>Our Promise</h2>
            <div className="promises">
                {promises.map((promise, index) => (
                    <div key={index} className="promise-card">
                        <h3>{promise.title}</h3>
                        <p>{promise.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PromiseSection