import React, { useState } from 'react';


const VisionForm = () => {
    const [situationActuelle, setSituationActuelle] = useState("");
    const [advantages, setAdvantages] = useState("");
    const [defaillances, setDefaillances] = useState("");
    const [beneficiaires, setBeneficiaires] = useState([{ cibles: "", objectifs: "", besoins: "" }]);
    const [veille, setVeille] = useState([{ entreprisesSimilaires: "", vision: "" }]);
    const [tendances, setTendances] = useState("");
  
    const handleBeneficiaireChange = (index, field, value) => {
      const updatedBeneficiaires = [...beneficiaires];
      updatedBeneficiaires[index][field] = value;
      setBeneficiaires(updatedBeneficiaires);
    };
  
    const removeVeilleRow = (index) => {
      const updatedVeille = [...veille];
      updatedVeille.splice(index, 1);
      setVeille(updatedVeille);
    };
  
    const addBeneficiaireRow = () => {
      setBeneficiaires([...beneficiaires, { cibles: "", objectifs: "", besoins: "" }]);
    };
  
    const handleVeilleChange = (index, field, value) => {
      const updatedVeille = [...veille];
      updatedVeille[index][field] = value;
      setVeille(updatedVeille);
    };
  
    const removeBeneficiaireRow = (index) => {
      const updatedBeneficiaires = [...beneficiaires];
      updatedBeneficiaires.splice(index, 1);
      setBeneficiaires(updatedBeneficiaires);
    };
    
    const addVeilleRow = () => {
      setVeille([...veille, { entreprisesSimilaires: "", vision: "" }]);
    };
  
    return (
      <div className='Step1Form'>
        <h2>I - La vision :</h2>
        <p>Pour bien penser votre vision, pensez à remplir le tableau suivant qui vous aidera à analyser la situation actuelle, à définir vos bénéficiaires ciblés et les tendances du marché. </p>

  
        <h3>1. Situation actuelle (environnement externe)</h3>
        <textarea
          value={situationActuelle}
          placeholder="Describe the current situation..."
          onChange={(e) => setSituationActuelle(e.target.value)}
        />
  
        <h3>Advantages | Défaillances</h3>
        <table className='table-to-change'>
          <tbody>
            <tr>
              <td>Advantages</td>
              <td>
                <textarea
                  value={advantages}
                  placeholder="List the advantages..."
                  onChange={(e) => setAdvantages(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Défaillances</td>
              <td>
                <textarea
                  value={defaillances}
                  placeholder="List the shortcomings..."
                  onChange={(e) => setDefaillances(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
  
        <h3>2. Bénéficiaires ciblés</h3>
        <table>
          <tbody>
            {beneficiaires.map((row, index) => (
              <tr key={index}>
                <td>Cibles</td>
                <td>
                  <input
                    type="text"
                    placeholder="List a cible..."
                    value={row.cibles}
                    onChange={(e) => handleBeneficiaireChange(index, "cibles", e.target.value)}
                  />
                </td>
                <td>Objectifs</td>
                <td>
                  <input
                    type="text"
                    value={row.objectifs}
                    placeholder="List the objectifs related to the cible..."
                    onChange={(e) => handleBeneficiaireChange(index, "objectifs", e.target.value)}
                  />
                </td>
                <td>Besoins</td>
                <td>
                  <input
                    type="text"
                    value={row.besoins}
                    placeholder="List the needs..."
                    onChange={(e) => handleBeneficiaireChange(index, "besoins", e.target.value)}
                  />
                </td>
                {index > 0 && (
                  <button className='remove-button' onClick={() => removeBeneficiaireRow(index)}>
                    X
                  </button>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addBeneficiaireRow}>Ajouter un Beneficiaire</button>
  
        <h3>3. Veille globale</h3>
        <table className='table-to-change'>
          <tbody>
            {veille.map((row, index) => (
              <tr key={index}>
                <td>Entreprise similaire</td>
                <td>
                  <textarea
                    placeholder="List a similar entreprise..."
                    value={row.entreprisesSimilaires}
                    onChange={(e) => handleVeilleChange(index, "entreprisesSimilaires", e.target.value)}
                  />
                </td>
                <td>Vision</td>
                <td>
                  <textarea
                    value={row.vision}
                    placeholder="List the vision..."
                    onChange={(e) => handleVeilleChange(index, "vision", e.target.value)}
                  />
                </td>
                {index > 0 && (
                  <button className='remove-button' onClick={() => removeVeilleRow(index)}>
                    X
                  </button>
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={addVeilleRow}>Ajouter une vision</button>
  
        <h3>4. Tendances de l’environnement</h3>
        <textarea
            placeholder="List the trends..."
          value={tendances}
          onChange={(e) => setTendances(e.target.value)}
        />
      </div>
    );
  };

  export default VisionForm;