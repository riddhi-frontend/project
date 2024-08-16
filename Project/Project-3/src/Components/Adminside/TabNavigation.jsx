import React, { useState } from 'react';

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState('MORE');

  const renderContent = () => {
    switch (activeTab) {
      case 'PRICE RANGE':
        return <div>
            <button>0-5 Lakh</button>
            <button>5-8 Lakh</button>
            <button>8-15 Lakh</button>
            <button>10-20 Lakh</button>
            <button>20-30 Lakh</button>
            <button>30-50 Lakh</button>
            <button>50-99 Lakh</button>
            <button>1+ Crore</button>
        </div>;
      case 'FUEL TYPE':
        return (
          <div>
            <button>Petrol</button>
            <button>Diesel</button>
            <button>EV</button>
            <button>Petrol + CNG</button>
          </div>
        );
      case 'MORE':
        return (
          <div>
            <button>Popular</button>
            <button>Latest</button>
            <button>Upcoming</button>
            <button>Luxury</button>
            <button>7 Seater</button>
            <button>8 Seater</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="tab-navigation container m-auto p-5">
        <h3>Find Cars of Your Choice</h3>
      <div className="tabs container m-auto">
        {['PRICE RANGE', 'FUEL TYPE', 'MORE'].map((tab) => (
          <div
            key={tab}
            className={`tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default TabNavigation;