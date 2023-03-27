import React, { useState } from 'react'
import '../../styles/article.css';

function EditArticle() {
  return (

    <div className='article-container'>

        <div className='article-form'>

            <div className='form-label'><h2>Modifier l'article : </h2>
            </div>

             <div className='form'>

                <div className='form-elements-container'>

                <div  className='form-element' >
                    <label htmlFor='titre'>Titre:</label>
                    <input className ="input-container" id='titre' type="titre" placeholder="Old Title" required />
                </div>
                
                <div  className='form-element'>
                    <label htmlFor='categorie'>Catégorie:</label>
                    <select id='categorie' className ="input-container" required>
                        <option value="">Sélectionner une catégorie</option>
                            <option value="category1">Catégorie 1</option>
                            <option value="category2">Catégorie 2</option>
                            <option value="category3">Catégorie 3</option>
                        </select>
                </div>
            </div>
                <div  className='form-element'>
                    <label htmlFor='content'>Contenu:</label>
                    <textarea id='content' className='input-container' rows='10' placeholder='Old content' required>Old content</textarea>
                </div>

                <div className='upload-container'>
                    <label className='upload-label'>Changer la photo:</label>
                    <input type='file' className='upload-input' />
                </div>
            

            <div className='article-btn'> 
                <button type="submit" className='btn' > <span>Sauvegarder</span></button> 
                <button type="reset" className='btn'> <span>Annuler</span></button> 
            </div>
            <div className='delete-btn-container'>
                <button type="button" className='btn'>Supprimer l'article</button>
            </div>
            </div>
    </div>
</div>
  )
}

export default EditArticle 