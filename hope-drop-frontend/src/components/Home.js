// src/components/Home.js
import React from 'react';
import HeroSection from './HeroSection';
import AdvertisementSection from './AdvertisementSection';
import PromotionSection from './PromotionSection';
import AboutSection from './AboutSection';
import Footerr from './Footerr';
//import NavbarComponent from './Navbar';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AdvertisementSection />
      <PromotionSection />
      <AboutSection />
      <Footerr />
    </div>
  );
};

export default Home;