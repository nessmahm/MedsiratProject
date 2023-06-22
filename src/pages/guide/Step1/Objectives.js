import React, { useState } from 'react';

const ObjectivesForm = () => {
  const [objectivesData, setObjectivesData] = useState([
    { type: '', objective: '', validation: '', changesNeeded: '' },
  ]);

  const handleObjectiveChange = (index, field, value) => {
    const updatedObjectives = [...objectivesData];
    updatedObjectives[index][field] = value;
    setObjectivesData(updatedObjectives);
  };

  const addNewObjective = () => {
    setObjectivesData([...objectivesData, { type: '', objective: '', validation: '', changesNeeded: '' }]);
  };

  const removeObjective = (index) => {
    const updatedObjectives = [...objectivesData];
    updatedObjectives.splice(index, 1);
    setObjectivesData(updatedObjectives);
  };

  return (
    <div className='Step1Form'>
      <h2>IV - Les objectifs :</h2>
      <ol>
        <li>* <b>Les objectifs à long terme</b> sont ce que l’on cherche à atteindre ultimement. Ils nous montrent ce qui est possible, ils nous inspirent. Ces objectifs prennent généralement plusieurs années voire toute une vie entière.</li>
        <li>* <b>Les objectifs à moyen terme</b> sont ceux que l’on peut réaliser dans un horizon temporel moyennement éloigné. Ce ne sont pas des objectifs que l’on peut atteindre en quelques jours, mais ce ne sont pas non plus des objectifs qui requièrent des décennies.</li>
        <li>* <b>Les objectifs à court terme</b> sont ceux que l’on peut accomplir en quelques jours voire quelques heures. Ils s’apparentent souvent à des tâches.</li>
    </ol>
      <p>Pour vous aider à définir vos objectifs, remplissez le tableau suivant :</p>
      <table className='table-to-change'>
        <thead>
          <tr>
            <th>Type</th>
            <th>Objectif</th>
            <th>Validation</th>
            <th>Sinon, qu’est-ce qu’il faut changer ?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {objectivesData.map((row, index) => (
            <tr key={index}>
              <td>
              <select
                  value={row.type}
                  onChange={(e) => handleObjectiveChange(index, 'type', e.target.value)}
                >
                  <option value="court terme">Court terme</option>
                  <option value="moyen terme">Moyen terme</option>
                  <option value="long terme">Long terme</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={row.objective}
                  onChange={(e) => handleObjectiveChange(index, 'objective', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.validation}
                  onChange={(e) => handleObjectiveChange(index, 'validation', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.changesNeeded}
                  onChange={(e) => handleObjectiveChange(index, 'changesNeeded', e.target.value)}
                />
              </td>
              {index > 0 && (
                  <button className='remove-button' onClick={() => removeObjective(index)}>
                    X
                  </button>
                )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addNewObjective}>Ajouter un objectif</button>
    </div>
  );
};

export default ObjectivesForm;
