import React from 'react';
const RecommendationBanner = () => {
  return (
    <div className="recommendation-banner">
      <div className="banner-content">
        <div className="banner-text">
          <img src='../src/Images/i1.png' alt="" className="banner-image"/>
        </div>
        <div className="banner-info">
          <h2>Not Sure, Which car to buy?</h2>
          <p>Let us help you find the dream car</p>
          <button className="recommendation-button">
            Show Me Best Car <span>&#x25BC;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationBanner;
