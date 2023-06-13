import React from 'react';
import Title from './Title';
import './Hero.css';

function Hero() {
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
            <button className='primary-btn hover-color1'>
              Commencez maintenant <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button className='hover-color2'>
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
