import React from 'react'
import { useState } from 'react';
import '../../styles/Description.css';

function Description() {
    
    const [titre, setTitre] = useState('');
    const [domaine, setDomaine] = useState([]);
    const [autreDomaine, setAutreDomaine] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [logo, setLogo] = useState(null);

    const handleDomainChange = (e) => {
        const value = e.target.value;
        setDomaine(value);
        if (value === 'autre') {
          setAutreDomaine('');
        }
      };
    
      const handleAutreDomaineChange = (e) => {
        setAutreDomaine(e.target.value);
      };
      const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
      const handleTitreChange = (e) => {
        setTitre(e.target.value);
      };
    
      const handleLogoChange = (e) => {
        setLogo(e.target.files[0]);
      };
    
    
  return (
    <div className='DescriptionContainer'>
    <div className='leftBox'>
    <form className='description-form'>  
    <div >
        <label htmlFor="titre">Titre du projet:</label>
        <input type="text" id="title" name="title" value={titre} onChange={handleTitreChange} placeholder="Entrez le nom de votre projet"/>
    </div>
    <div>
        <label htmlFor="domain">Domaine du projet:</label>
        <select  id="domain" name="domain" value={domaine} onChange={handleDomainChange} placeholder="Sélectionnez le domaine de votre projet">
          <option value="Commerce">Commerce</option>
          <option value="It">It</option>
          <option value="Agriculture">Agriculture et agroalimentaire</option>
          <option value="tourise et voyage">Tourisme et voyages</option>
          <option value="Santé et bien-être">Santé et bien-être</option>
          <option value="Énergie renouvelable">Énergie renouvelable</option>
          <option value="autre">Autre</option>

        </select>
        {domaine === 'autre' && (
          <div>
            <label htmlFor="autreDomaine">Autre domaine:</label>
            <input type="text" id="autreDomaine" name="autreDomaine" value={autreDomaine} onChange={handleAutreDomaineChange} placeholder="Autre domaine"/>
          </div>
        )} 
         <div>
        <label htmlFor="logo">Logo:</label>
        <input type="file" id="logo" name="logo" accept="image/*" onChange={handleLogoChange} />
      </div>

      </div>
      </form>  
    </div>
    <div className='rightBox'>
    <label for="description">Description du projet:</label>
    <textarea id="description" name="description" rows="4" cols="50" placeholder='Décrivez votre projet.'></textarea>
    </div>
    <div className='buttonContainer'>
    <button type="submit">Sauvegarder</button>
    </div>

    </div>
  )
}

export default Description