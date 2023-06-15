import React from 'react';
import { servicesCard } from '../../../assets/dummydata';
import Title from '../Hero/Title';
import { useNavigate } from 'react-router-dom';
import FieldCourses from '../allServices/FieldCourses';
import '../allServices/services.css';

const HAbout = () => {
  let navigate = useNavigate();
  const handleConnect = () => {
    navigate("/signin"); 
    window.scrollTo(0, 0);// do something with the selected file
  };

  return (
    <section  >
      <div className='container' >
        <Title subtitle='Nos Services' title='Explorez nos services' />
        <div className='coursesCard'>
          <div className='grid2'>
            {servicesCard.slice(0, 3).map((val) => (
              <div className='items'>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    <div className='rate'>
                      {/* Render rating stars */}
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details) => (
                        <div className='box'>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <button className='outline-btn' onClick={handleConnect}>ENROLL!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FieldCourses />
    </section>
  );
}

export default HAbout;
