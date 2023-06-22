import React, { useState } from 'react';
import '../../../styles/steps.css';
import VisionForm from './Vision';
import MissionForm from './Mission';
import ValuesForm from './Value';
import ObjectivesForm from './Objectives';


const Step1 = () => {
  return (
    <div className='Step1'>
      <h1>Le Travail en équipe</h1>
      <VisionForm />
      <MissionForm />
      <ValuesForm />
      <ObjectivesForm/>
    </div>
  );
};

export default Step1;
