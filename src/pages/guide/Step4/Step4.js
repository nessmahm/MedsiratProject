import React, { useState } from 'react';
import '../../../styles/steps.css';
import FicheForm from './Fiche';
import Fournisseur from './Fournisseur';
import Activities from './Activities';



const Step4 = () => {
  return (
    <div className='Step1'>
      <h1>L'Etude de faisabilité du projet</h1>
      <div className='Step1Form'>
      <FicheForm/>
      <Fournisseur/>
      <Activities/> 
      </div>
    </div>
  );
};

export default Step4;
