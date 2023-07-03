import React, { useState } from 'react';

const FicheForm = () => {
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [formeJuridique, setFormeJuridique] = useState('');
  const [dateCreation, setDateCreation] = useState('');
  const [fondateurs, setFondateurs] = useState('');
  const [emplacements, setEmplacements] = useState('');
  const [coutInvestissement, setCoutInvestissement] = useState('');
  const [chiffreAffaires, setChiffreAffaires] = useState('');
  const [nbreEmploisHommes, setNbreEmploisHommes] = useState('0');
    const [nbreEmploisFemmes, setNbreEmploisFemmes] = useState('0');
    const [nbreEmploisMoins35, setNbreEmploisMoins35 ] = useState('0');
  const [nbreSaisonniersHommes, setNbreSaisonniersHommes] = useState('0');
    const [nbreSaisonniersFemmes, setNbreSaisonniersFemmes] = useState('0');
    const [nbreSaisonniersMoins35, setNbreSaisonniersMoins35] = useState('0');
  const [offreProposee, setOffreProposee] = useState('');
  const [clientsCibles, setClientsCibles] = useState('');
  const [produitsServices, setProduitsServices] = useState('');
  const [principauxConcurrents, setPrincipauxConcurrents] = useState('');
  const [partenairesFournisseurs, setPartenairesFournisseurs] = useState('');

  return (
    <div className="Step1Form">
      <h3>1. Fiche d'entreprise :</h3>
      <div className='ficheForm'>
        <table>
          <tbody>
            <tr>
              <td>Nom de l'entreprise</td>
              <td>
                <input
                  type="text"
                  value={nomEntreprise}
                  onChange={(e) => setNomEntreprise(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Forme juridique</td>
              <td>
                <input
                  type="text"
                  value={formeJuridique}
                  onChange={(e) => setFormeJuridique(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Date de création</td>
              <td>
                <input
                  type="date"
                  value={dateCreation}
                  onChange={(e) => setDateCreation(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Fondateurs</td>
              <td>
                <input
                  type="text"
                  value={fondateurs}
                  onChange={(e) => setFondateurs(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Emplacement(s)</td>
              <td>
                <input
                  type="text"
                  value={emplacements}
                  onChange={(e) => setEmplacements(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Coût d'investissement</td>
              <td>
                <input
                  type="text"
                  value={coutInvestissement}
                  onChange={(e) => setCoutInvestissement(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Chiffre d'affaires</td>
              <td>
                <input
                  type="text"
                  value={chiffreAffaires}
                  onChange={(e) => setChiffreAffaires(e.target.value)}
                />
              </td>
            </tr>
            <tr>
  <td>Nbre d'emplois permanents</td>
  <td>
    <table>
      <tbody>
        <tr>
          <td>Hommes</td>
          <td>
            <input
              type="number"
              value={nbreEmploisHommes}
              onChange={(e) => {
                setNbreEmploisHommes(e.target.value);
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Femmes</td>
          <td>
            <input
              type="number"
                value={nbreEmploisFemmes}
              onChange={(e) => {
                setNbreEmploisFemmes(e.target.value);
                /* handle change for femmes */
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Moins de 35 ans</td>
          <td>
            <input
              type="number"
                value={nbreEmploisMoins35}
              onChange={(e) => {
                setNbreEmploisMoins35(e.target.value);
                /* handle change for moins de 35 ans */
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>
<tr>
  <td>Nbre de Saisonniers</td>
  <td>
    <table>
      <tbody>
        <tr>
          <td>Hommes</td>
          <td>
            <input
              type="number"
              value={nbreSaisonniersHommes}
              onChange={(e) => {
                setNbreSaisonniersHommes(e.target.value);
                /* handle change for hommes */
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Femmes</td>
          <td>
            <input
              type="number"
                value={nbreSaisonniersFemmes}
              onChange={(e) => {
                setNbreSaisonniersFemmes(e.target.value);
                /* handle change for femmes */
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Moins de 35 ans</td>
          <td>
            <input
              type="number"
                value={nbreSaisonniersMoins35}
              onChange={(e) => {
                setNbreSaisonniersMoins35(e.target.value);
                /* handle change for moins de 35 ans */
              }}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </td>
</tr>

            <tr>
              <td>Offre proposée</td>
              <td>
                <input
                  type="text"
                  value={offreProposee}
                  onChange={(e) => setOffreProposee(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Clients cibles / Bénéficiaires</td>
              <td>
                <input
                  type="text"
                  value={clientsCibles}
                  onChange={(e) => setClientsCibles(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Produits / Services</td>
              <td>
                <input
                  type="text"
                  value={produitsServices}
                  onChange={(e) => setProduitsServices(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Principaux concurrents</td>
              <td>
                <input
                  type="text"
                  value={principauxConcurrents}
                  onChange={(e) => setPrincipauxConcurrents(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Partenaires et Fournisseurs</td>
              <td>
                <input
                  type="text"
                  value={partenairesFournisseurs}
                  onChange={(e) => setPartenairesFournisseurs(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FicheForm;
