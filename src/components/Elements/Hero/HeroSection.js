import React from 'react';
import Title from './Title';
import { useNavigate } from "react-router-dom";
import './Hero.css';

function Hero() {
  let navigate = useNavigate();

  const handleServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }// do something with the selected file
  };
  
  const handleConnect = () => {
    navigate("/signin");
    window.scrollTo(0, 0); // do something with the selected file
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Title
              subtitle='Bienvenue à Medsirat'
              title='La meilleure plateforme pour les entrepreneurs'
            />
            <p className='hero-description'>
              Medsirat vous guide pour réaliser vos projets étape par étape. Nos experts vous aident à trouver les meilleures solutions.
            </p>
            <div className='button-container'>
            <button style={{textAlign:"center"}} className='primary-btn hover-color1' onClick={handleConnect}>
              Commencez maintenant <i className='fa fa-long-arrow-alt-right' ></i>
            </button>
            <button className='hover-color2'  onClick={handleServices}>
              Voir nos services <i className='fa fa-long-arrow-alt-right'></i>
            </button>

            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
