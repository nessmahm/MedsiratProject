import React from 'react'
import { useState } from 'react';
import '../../styles/profile.css';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/images/avatar.jpg'
function Profil() {
  const [imageUrl, setImageUrl] = useState(image); // Set a default image
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    console.log(selectedFile); // do something with the selected file
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input element
    const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
    setImageUrl(imageUrl); // Update the state with the new image URL
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // faire quelque chose avec les données du formulaire
  }

  const handleLogout = () => {
    // faire quelque chose pour déconnecter l'utilisateur
  }
  return (
    <div className='profileContainer'>
   
      
      <div className='leftSide'>
        <div className='imageContainer'>
        <img src={imageUrl} alt="Profile" />
        <h3>Changer ma photo de profil</h3>
        <input  type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
       <div className='AjouterArticle'>
       <button onClick={handleFileUpload} >Ajouter un article</button>
       </div>
       
       
    </div>
    
        
      
      <div className='formSide'> 
      <form onSubmit={handleSubmit}>
      <label>
       Nom: 
        <input className='input' type="text" value={nom} onChange={(event) => setNom(event.target.value)} placeholder="Entrez votre nom" required/>

      </label>
      
     
      <label>
        Prénom:
        <input  type="text" value={prenom} onChange={(event) => setPrenom(event.target.value)} placeholder="Entrez votre prénom" required/>
      </label>
      <label>
        Adresse mail:
        <input  type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Entrez votre adresse mail" required/>
      </label>
      <label>
        Téléphone:
        <input type="tel" value={telephone} onChange={(event) => setTelephone(event.target.value)} placeholder="Entrez votre numéro de téléphone" required/>
      </label>
      <label>
        Mot de passe:
        <input  type="password" value={motDePasse} onChange={(event) => setMotDePasse(event.target.value)} placeholder="Entrez votre mot de passe" required/>
      </label>
    
      <div className='buttons'>
      <button type="submit">Sauvegarder</button>
      <button type="button" onClick={handleLogout}>Se déconnecter</button>
      </div>

    </form>
      </div>
    </div>
  )
}

export default Profil;