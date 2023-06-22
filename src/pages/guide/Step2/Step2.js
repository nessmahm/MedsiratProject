import React, { useState } from 'react';
import CapacitiesForm from './Capacities';
import ResourcesComponent from './Resources';
import RegionMappingComponent from './RegionMapingComponent';
import SocialNeeds from './SocialNeeds';
const Step2Form = () => {
  


  return (
    <div className="Step1">
      <h1>L'environnement de l'entreprise</h1>
       <div className='Step1Form'>
      <RegionMappingComponent/>

      <CapacitiesForm/>

      <ResourcesComponent />

      <SocialNeeds />
      </div>
    </div>
  );
};

export default Step2Form;
