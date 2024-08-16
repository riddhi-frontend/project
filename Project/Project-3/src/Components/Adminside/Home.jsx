import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import Footer from './Footer'
import FeatureCard from './FeatureCard'
import WhyTrueCar from './WhyTrueCar'
import FeaturedTools from './FeaturedTools'
import HowItWorks from './HowItWorks'
import TabNavigation from './TabNavigation'
import RecommendationBanner from './RecommendationBanner'

function Home() {

  return (
    <>
      <Navbar/>
      <LandingPage/>
      <HowItWorks/>
      <FeaturedTools/>
      <WhyTrueCar/>
      <FeatureCard/>
      <RecommendationBanner/>
      <TabNavigation/>
      <Footer/>

    </>
  )
}

export default Home