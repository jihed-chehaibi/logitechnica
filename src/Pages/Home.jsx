import React from 'react';
import ServicesSection from '../Component/ServicesSection/ServicesSection';
import NavBar from '../Component/NavBar/NavBar';
import Footer from '../Component/Footer/Footer';
import HeroSection from '../Component/HeroSection/HeroSection';
import FeaturesSection from '../Component/FeaturesSection/FeaturesSection';
import WhyChooseUs from '../Component/WhyChooseUs/WhyChooseUs';
import Loader from '../Component/Loader/Loader';
import TestimonialsSection from '../Component/TestimonialsSection/TestimonialsSection';
import TeamSection from '../Component/TeamSection/TeamSection';
import PartnersScroller from '../Component/PartnersScroller/PartnersScroller';
import FinalCTASection from '../Component/FinalCTASectio/FinalCTASection';

import './Home.css';

export default function Home() {
  
  return (
    <div >
      <Loader />
      <NavBar />   
      <HeroSection />  
      <FeaturesSection />
      <ServicesSection />
      <WhyChooseUs /> 
      <TestimonialsSection />
      <TeamSection />
      <PartnersScroller />
      <FinalCTASection /> 
      <Footer />
    </div>
  );
}