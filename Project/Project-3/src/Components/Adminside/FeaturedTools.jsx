import React from 'react';

const tools = [
    {
        image: 'https://th.bing.com/th/id/OIP.eMVWa0v_5z_o3lEE91G0LgHaEJ?rs=1&pid=ImgDetMain', 
        title: 'Find your fit',
        description: 'Not sure what you want? Answer a few questions to find what fits you best.',
        buttonText: 'Start quiz',
    },
    {
        image: 'https://www.xdsoftware.com.br/wp-content/uploads/2021/06/revenda_1.jpg', 
        title: 'Shop by budget',
        description: 'Save time and narrow down cars that fit your monthly payment and price point.',
        buttonText: 'See your buying power',
    },
    {
        image: 'https://th.bing.com/th/id/OIP.sQW3Kcngvwqhj80Qa06HiQHaFW?rs=1&pid=ImgDetMain', 
        title: 'Build and price',
        description: 'Choose the make, model, trim, and options you want.',
        buttonText: 'Buy your Car',
    },
    {
        image: 'https://th.bing.com/th/id/OIP.SItE-ePxqEWotZWdYTuXnQHaE8?rs=1&pid=ImgDetMain', 
        title: 'Sell and trade',
        description: 'Get an offer in minutes, then cash out or trade in.',
        buttonText: 'Learn more',
    },
];

const FeaturedTools = () => {
    return (
        <div className="featured-tools-container">
            <h2>Featured tools</h2>
            <div className="featured-tools-cards">
                {tools.map((tool, index) => (
                <div key={index} className="featured-tools-card">
                    <img src={tool.image} alt={tool.title} className="featured-tools-image" />
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                {tool.buttonText && <button className="featured-tools-button">{tool.buttonText}</button>}
            </div>
        ))}
        </div>
    </div>
    );
};

export default FeaturedTools
