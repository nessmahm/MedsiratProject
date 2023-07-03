import React, { useState } from 'react';

const RegionMappingComponent = () => {
  const [fields, setFields] = useState([
    { title: 'Ressources', value: '' },
    { title: 'Points Faibles', value: '' },
    { title: 'Points Forts', value: '' },
    { title: 'Besoins', value: '' },
    { title: 'Menaces', value: '' },
    { title: 'Services', value: '' },
    { title: 'Activités', value: '' },
    { title: 'Produits', value: '' },
    { title: 'Compétences', value: '' }
  ]);
  const [newFieldTitle, setNewFieldTitle] = useState('');

  const handleAddField = () => {
    if (newFieldTitle !== '') {
      setFields([...fields, { title: newFieldTitle, value: '' }]);
      setNewFieldTitle('');
    }
  };

  const handleDeleteField = (index) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  const handleFieldChange = (e, index, fieldKey) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldKey] = e.target.value;
    setFields(updatedFields);
  };

  return (
    <div>
      <h3>1. Cartographie de la région de l'entreprise :</h3>
      <p>Pour étudier l’environnement de l’entreprise, commencez par remplir le mapping suivant de votre région :</p>

      <div className="region">
        <ul>
          {fields.map((field, index) => (
            <li key={index}>
              <div className='field-title'><span>{field.title}:</span></div>
              <input
                type="text"
                value={field.value}
                onChange={(e) => handleFieldChange(e, index, 'value')}
              />
              {index >= 9 && (
                <button  className='remove-button' onClick={() => handleDeleteField(index)}>X</button>
              )}
            </li>
          ))}
          <li>
            <button onClick={handleAddField}>Ajouter un champ</button>
            <input
              className="input-to-change"
              type="text"
              value={newFieldTitle}
              onChange={(e) => setNewFieldTitle(e.target.value)}
              placeholder="Titre du champ"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegionMappingComponent;
