import React from 'react';
import { homeAbout } from '../../../assets/dummydata';
import Awrapper from './Awrapper';
import Title from '../Hero/Title';
import './about.css';

const AboutCard = () => {
  return (
    <section className='aboutHome' id="services">
      <div className='container flexSB'>
        <div className='left row'>
          <img src='./images/about.webp' alt='' />
        </div>
        <div className='right row'>
          <Title subtitle='Apprenez tout' title='Les bénéfices de nos services' />
          <div className='items'>
            {homeAbout.map((val) => (
              <div className='item flexSB'>
                <div className='' style={{width:"70px",marginRight:"20px"}}>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text '>
                  <h2>{val.title}</h2>
                  <p>{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;

