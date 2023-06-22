import React, { useState } from 'react';
  
  const MissionForm = () => {
    const [missions, setMissions] = useState([{ statement: '', filters: { competence: '', laws: '', impact: '', resources: '' } }]);
  
    const handleMissionChange = (index, field, value) => {
      const updatedMissions = [...missions];
      updatedMissions[index][field] = value;
      setMissions(updatedMissions);
    };
  
    const addMissionRow = () => {
      setMissions([...missions, { statement: '', filters: { competence: '', laws: '', impact: '', resources: '' } }]);
    };
  
    const removeMissionRow = (index) => {
        const updatedMissions = [...missions];
        updatedMissions.splice(index, 1);
        setMissions(updatedMissions);
      };

    return (
      <div className="Step1Form">
        <h2>II - La mission : </h2>
        <p>Pour définir votre mission d'une manière optimale, suivez les étapes suivantes:</p>
        <ol>
          <li>1- Lister toutes les ressources que possède l'entreprise</li>
          <li>2- Vérifier les textes de lois qui régissent le secteur auquel appartient l'entreprise</li>
          <li>3- Définir tous les axes d'activités sur lesquels il faut travailler pour que la vision soit concrétisée</li>
          <li>4- Faire passer les axes d'activités, un par un, par les filtres MISSION</li>
          <li>5- Rassembler les axes d'activités restants et essayer d'en sortir une mission claire, cohérente et précise</li>
        </ol>

      {missions.map((mission, index) => (
        <div key={index}>
          <h3>* Mission {index + 1}
          {index > 0 && (
              <button className="remove-button" onClick={() => removeMissionRow(index)}>
                X
              </button>
            )}
            </h3>

          <label>Rédiger l’énoncé de la mission:</label>
          <textarea
            value={mission.statement}
            placeholder="Rédiger l’énoncé de la mission..."
            onChange={(e) => handleMissionChange(index, "statement", e.target.value)}
          />

          <h3>Filtres MISSION:</h3>
          <p>Pour valider la mission, répondez aux questions suivantes : </p>
          <div className='radio-container'>
  <p>Est-ce que cet axe d'activités entre dans notre champ des compétences ?</p>
  <label>
    <input
      type="radio"
      name={`competence-${index}`}
      value="oui"
      checked={mission.competence === "oui"}
      onChange={() => handleMissionChange(index, "competence", "oui")}
    />
    Oui
  </label>
  <label>
    <input
      type="radio"
      name={`competence-${index}`}
      value="non"
      checked={mission.competence === "non"}
      onChange={() => handleMissionChange(index, "competence", "non")}
    />
    Non
  </label>
</div>

<div  className='radio-container'>
  <p>Est-ce que cet axe d'activités est en concordance avec les textes de lois ?</p>
  <label>
    <input
      type="radio"
      name={`concordance-${index}`}
      value="oui"
      checked={mission.concordance === "oui"}
      onChange={() => handleMissionChange(index, "concordance", "oui")}
    />
    Oui
  </label>
  <label>
    <input
      type="radio"
      name={`concordance-${index}`}
      value="non"
      checked={mission.concordance === "non"}
      onChange={() => handleMissionChange(index, "concordance", "non")}
    />
    Non
  </label>
</div>

<div  className='radio-container'>
  <p>
    Est-ce que cet axe d'activités peut avoir un impact mesurable pour les bénéficiaires ciblés par la vision ?
  </p>
  <label>
    <input
      type="radio"
      name={`impact-${index}`}
      value="oui"
      checked={mission.impact === "oui"}
      onChange={() => handleMissionChange(index, "impact", "oui")}
    />
    Oui
  </label>
  <label>
    <input
      type="radio"
      name={`impact-${index}`}
      value="non"
      checked={mission.impact === "non"}
      onChange={() => handleMissionChange(index, "impact", "non")}
    />
    Non
  </label>
</div>

<div  className='radio-container'>
  <p>
    Est-ce qu'on possède les ressources nécessaires pour pouvoir creuser dans cet axe d'activités ?
  </p>
  <label>
    <input
      type="radio"
      name={`resources-${index}`}
      value="oui"
      checked={mission.resources === "oui"}
      onChange={() => handleMissionChange(index, "resources", "oui")}
    />
    Oui
  </label>
  <label>
    <input
      type="radio"
      name={`resources-${index}`}
      value="non"
      checked={mission.resources === "non"}
      onChange={() => handleMissionChange(index, "resources", "non")}
    />
    Non
  </label>
</div>

        </div>
      ))}

      <button onClick={addMissionRow}>Ajouter une mission</button>
    </div>
  );
};

export default MissionForm;