import React from 'react';
import AboutCard from '../../components/Elements/about/AboutCard';
import HAbout from '../../components/Elements/about/HAbout';
import Hero from '../../components/Elements/Hero/HeroSection';
import Team from '../../components/Elements/team/Team';
import Awrapper from '../../components/Elements/about/Awrapper';

function Home() {
  return (
    <div className="homepage">
      <Hero />
      <AboutCard />
      <div id="services-section">
      <HAbout />
      </div>
      <Team />
      <Awrapper />
    </div>
  );
}

export default Home;
