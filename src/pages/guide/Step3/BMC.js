import React, { useState } from 'react';

const questions = [
  "Qui sont nos partenaires clés? Qui sont nos principaux fournisseurs? Quelles ressources clés obtenons-nous de nos partenaires? Quelles activités clés les partenaires réalisent-ils?",
  "Quelles ressources clés notre proposition de valeur requiert-elle? ",
  "Quelles activités planifiées et non-planifiées notre organisation entreprendra-t-elle ?",
  "Quelle valeur offrons-nous au client? Quels problèmes de clients aidons-nous à résoudre? Quels ensembles de produits et services offrons-nous à chaque segment de clientèle?",
  "Quel type de relation que chacun de nos segments de clientèle s'attend à ce que nous établissions et maintenions avec eux? Quelle est la durée de vie de la relation client?",
  "Quels canaux préférentiels nos segments de clientèle souhaitent-ils utiliser? Comment les atteignons-nous maintenant?",
  "Quels segments de clientèle servons-nous? Pour qui créons-nous de la valeur? Qui sont nos clients les plus importants?",
  "Quels sont les coûts les plus importants inhérents à notre modèle d'entreprise? Quelles ressources clés sont les plus coûteuses? Quelles activités clés sont les plus coûteuses?",
  "Pour quels services les clients sont-ils vraiment prêts à payer? Pour quoi paient-ils actuellement? Comment paient-ils actuellement? Comment paieraient-ils préférablement? Combien rapporte chaque source de revenu?"
];

const BMCForm = ({ onSave }) => {
  const [bmc, setBMC] = useState({});

  const handleInputChange = (event, index) => {
    const { value } = event.target;
    setBMC(prevBMC => ({
      ...prevBMC,
      [index]: {
        question: questions[index],
        value: value
      }
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSave(bmc);
  };

  return (
    <div>
       <h1>L'idée d'Entreprise</h1>
    <form onSubmit={handleSubmit}  className='Step1Form'>
      {questions.map((question, index) => (
        <div key={index}>
          <label>{question}</label>
          <textarea
            value={(bmc[index] && bmc[index].value) || ''}
            onChange={event => handleInputChange(event, index)}
          />
        </div>
      ))}
      <button type="submit">Generate BMC</button>
    </form>
    </div>

  );
};

export default BMCForm;
