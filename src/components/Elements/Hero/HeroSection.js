import './Hero.css';
import React from 'react';
import Title from './Title';
function Hero(){
    return(
        <>
        <section className='hero'>
          <div className='container'>
            <div className='row'>
              <Title subtitle='Bienevenue à Medsirat' title
              ="La meilleure plateforme pour les entrepreneurs"></Title>
              <p>Medsirat vous guide à réaliser vos projets étape par étape.Nos experts vous guident à trouver les meilleurs solutions.</p>
              <div className='button'>
                <button className='primary-btn'>
                  Commencez maintenant <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
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
