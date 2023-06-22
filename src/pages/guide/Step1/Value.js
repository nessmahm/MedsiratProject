import React, { useState } from 'react';

const ValuesForm = () => {
  const [valuesData, setValuesData] = useState([
    { value: '', importance: '', notImportant: '', vote: '' },
  ]);

  const handleValueChange = (index, field, value) => {
    const updatedValues = [...valuesData];
    updatedValues[index][field] = value;
    setValuesData(updatedValues);
  };

    const addValueRow = () => {
      setValuesData([...valuesData, { value: '', importance: '', notImportant: '', vote: '' }]);
    };

    const removeValueRow = (index) => {
        const updatedValues = [...valuesData];
        updatedValues.splice(index, 1);
        setValuesData(updatedValues);
      };

      
  return (
    <div className="Step1Form">
      <h2>III - Les valeurs :</h2>
      <p>Pour vous aider à définir vos valeurs, remplissez le tableau suivant :</p>
      <table>
        <thead>
          <tr>
            <th>Valeur proposée</th>
            <th>Pourquoi cette valeur est importante ?</th>
            <th>Pourquoi elle n’est pas importante ?</th>
            <th>Vote (pourcentage des adhérents)</th>
          </tr>
        </thead>
        <tbody>
          {valuesData.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={row.value}
                  onChange={(e) => handleValueChange(index, 'value', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.importance}
                  onChange={(e) => handleValueChange(index, 'importance', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.notImportant}
                  onChange={(e) => handleValueChange(index, 'notImportant', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.vote}
                  onChange={(e) => handleValueChange(index, 'vote', e.target.value)}
                />
              </td>
              {index > 0 && (
                  <button className='remove-button' onClick={() => removeValueRow(index)}>
                    X
                  </button>
                )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addValueRow}>Ajouter une valeur</button>
    </div>
  );
};

export default ValuesForm;
