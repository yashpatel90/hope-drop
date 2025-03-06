// src/components/HomeAfterLogin.js
import React from 'react';
import HeroSection from './HeroSection';
import AdvertisementSection from './AdvertisementSection';
import PromotionSection from './PromotionSection';
import AboutSection from './AboutSection';
import Footer from './Footerr';

const HomeAfterLogin = () => {
  return (
    <div>
      <HeroSection />
      <AdvertisementSection />
      <PromotionSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default HomeAfterLogin;