import React from 'react';
import ServiceIntro from './ServiceIntro';
import ServiceList from './ServiceList';
import PromiseSection from './PromiseSection';
import ProcessSection from './ProcessSection';
import Navbar from './Navbar';
import Footer from './Footer';

const Service = () => {
  return (
    <div className="Service">
      <Navbar/>
      <ServiceIntro />
      <ServiceList />
      <PromiseSection />
      <ProcessSection />
      <Footer/>
    </div>
  );
};

export default Service
