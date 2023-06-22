import React, { useState } from 'react';

const SocialNeeds = () => {
  const [needs, setNeeds] = useState([
    { besoin: '', type: '', importance: '', recurrence: '' }
  ]);
  const [conclusion, setConclusion] = useState('');

  const handleAddRow = () => {
    setNeeds([...needs, { besoin: '', type: '', importance: '', recurrence: '' }]);
  };

  const handleRemoveRow = (index) => {
    const updatedNeeds = [...needs];
    updatedNeeds.splice(index, 1);
    setNeeds(updatedNeeds);
  };

  const handleInputChange = (e, index, field) => {
    const updatedNeeds = [...needs];
    updatedNeeds[index][field] = e.target.value;
    setNeeds(updatedNeeds);
  };

  return (
    <div>
      <h3>5 - Besoins sociaux</h3>
      <p>Dégagez les besoins de votre région ainsi que leurs types (besoin environnemental, besoin des femmes, besoin des jeunes, etc...).{'\n'}       <p>Classer les besoins sociaux dégagés selon leur importance et leur récurrence:</p>
</p>

      <table className='needs-table'>
        <thead>
          <tr>
            <th>Les besoins</th>
            <th>Type de besoin</th>
            <th>Importance</th>
            <th>Récurrence</th>
          </tr>
        </thead>
        <tbody>
          {needs.map((need, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={need.besoin}
                  onChange={(e) => handleInputChange(e, index, 'besoin')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={need.type}
                  onChange={(e) => handleInputChange(e, index, 'type')}
                />
              </td>
              <td>
                <select
                  value={need.importance}
                  onChange={(e) => handleInputChange(e, index, 'importance')}
                >
                  <option value="peu_important">Peu important</option>
                  <option value="moyen-important">Moyen Important</option>
                  <option value="important">Important</option>

                </select>
              </td>
              <td>
                <select
                  value={need.recurrence}
                  onChange={(e) => handleInputChange(e, index, 'recurrence')}
                >
                  <option value="peu_recurrent">Peu récurrent</option>
                  <option value="moyen-recurrent">Moyen Récurrent</option>
                  <option value="recurrent">Récurrent</option>
                </select>
              </td>
              {index > 0 && (
                <td>
                  <button onClick={() => handleRemoveRow(index)}>X</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={handleAddRow}>Ajouter un besoin</button>

      <p>
        Trouvez un lien entre les besoins les plus récurrents et importants et les idées que vous avez proposées suite à l'étude de vos ressources et vos capacités cumulées.{'\n'}<p>L'objectif est de trouver une idée qui répond à un besoin social important et récurrent dans la région.</p>
      </p>
      <textarea
        className="conclusion"
        value={conclusion}
        placeholder="Write your conclusion..."
        onChange={(e) => setConclusion(e.target.value)}
      ></textarea>
    </div>
  );
};

export default SocialNeeds;
