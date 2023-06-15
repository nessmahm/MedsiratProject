import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../../styles/profile.css';
import image from '../../assets/images/avatar.jpg';

function Profile() {
  let navigate = useNavigate();

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

  const handleAddArticle = () => {
    navigate("/AddArticle"); // do something with the selected file
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file from the input element
    const imageUrl = URL.createObjectURL(file); // Create a URL for the selected file
    setImageUrl(imageUrl); // Update the state with the new image URL
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
  };

  const handleLogout = () => {
    // do something to log out the user
  };

  return (
    <div className='profileContainer'>
      <div className='leftSide'>
        <div className='imageContainer'>
          <img src={imageUrl} alt="Profile" />
          <h3>Changer ma photo de profil</h3>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
        <div className='AjouterArticle'>
          <button onClick={handleAddArticle}>Ajouter un article</button>
        </div>
      </div>

      <div >
        <form onSubmit={handleSubmit} className='profile-form'>
          <div className='form-element'>
            <label >
              Nom:
              <input
                className='input-container'
                type="text"
                value={nom}
                onChange={(event) => setNom(event.target.value)}
                placeholder="Entrez votre nom"
                required
              />
            </label>
          </div>

          <div className='form-element'>
            <label >
              Prénom:
              <input
                className='input-container'
                type="text"
                value={prenom}
                onChange={(event) => setPrenom(event.target.value)}
                placeholder="Entrez votre prénom"
                required
              />
            </label>
          </div>

          <div className='form-element'>
            <label >
              Adresse mail:
              <input
                className='input-container'
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Entrez votre adresse mail"
                required
              />
            </label>
          </div>

          <div className='form-element'>
            <label >
              Téléphone:
              <input
                className='input-container'
                type="tel"
                value={telephone}
                onChange={(event) => setTelephone(event.target.value)}
                placeholder="Entrez votre numéro de téléphone"
                required
              />
            </label>
          </div>

          <div className='form-element'>
            <label >
              Mot de passe:
              <input
                className='input-container'
                type="password"
                value={motDePasse}
                onChange={(event) => setMotDePasse(event.target.value)}
                placeholder="Entrez votre mot de passe"
                required
              />
            </label>
          </div>

          <div className='buttons'>
            <button type="submit" className='sign-btn2'>Sauvegarder</button>
            <button type="button" onClick={handleLogout} className='sign-btn2'>Se déconnecter</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
