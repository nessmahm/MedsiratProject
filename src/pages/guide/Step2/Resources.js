import React, { useState } from 'react';
const ResourcesComponent = () => {
    const [financialResources, setFinancialResources] = useState([{ financial: '', founder: '', description: '', availability: '' }]);
    const [materialResources, setMaterialResources] = useState([{ material: '', founder: '', description: '', availability: '' }]);
    const [immaterialResources, setImmaterialResources] = useState([{ immaterial: '', founder: '', description: '', availability: '' }]);
    const [humanResources, setHumanResources] = useState([{ human: '', founder: '', description: '', availability: '' }]);
    const [communityResources, setCommunityResources] = useState([{ community: '',description: '', availability: '', risks: '' }]);
    const [idea1, setIdea1] = useState('');
    const [idea2, setIdea2] = useState('');
    const [idea3, setIdea3] = useState('');

    const handleResourceChange = (index, type, value, resourceType) => {
      switch (resourceType) {
        case 'financialResources':
          const updatedFinancialResources = [...financialResources];
          updatedFinancialResources[index][type] = value;
          setFinancialResources(updatedFinancialResources);
          break;
        case 'materialResources':
          const updatedMaterialResources = [...materialResources];
          updatedMaterialResources[index][type] = value;
          setMaterialResources(updatedMaterialResources);
          break;
        case 'immaterialResources':
          const updatedImmaterialResources = [...immaterialResources];
          updatedImmaterialResources[index][type] = value;
          setImmaterialResources(updatedImmaterialResources);
          break;
        case 'humanResources':
          const updatedHumanResources = [...humanResources];
          updatedHumanResources[index][type] = value;
          setHumanResources(updatedHumanResources);
          break;
        case 'communityResources':
          const updatedCommunityResources = [...communityResources];
          updatedCommunityResources[index][type] = value;
          setCommunityResources(updatedCommunityResources);
          break;
        default:
          break;
      }
    };
  
    const handleAddRow = (resourceType) => {
      switch (resourceType) {
        case 'financialResources':
          setFinancialResources([...financialResources, { financial: '', founder: '', description: '', availability: '' }]);
          break;
        case 'materialResources':
          setMaterialResources([...materialResources, { material: '', founder: '', description: '', availability: '' }]);
          break;
        case 'immaterialResources':
          setImmaterialResources([...immaterialResources, { immaterial: '', founder: '', description: '', availability: '' }]);
          break;
        case 'humanResources':
          setHumanResources([...humanResources, { human: '', founder: '', description: '', availability: '' }]);
          break;
        case 'communityResources':
          setCommunityResources([...communityResources, { description: '', availability: '', risks: '' }]);
          break;
        default:
          break;
      }
    };
  
    const handleRemoveRow = (resourceType, index) => {
        switch (resourceType) {
          case 'financialResources':
            const updatedFinancialResources = [...financialResources];
            updatedFinancialResources.splice(index, 1);
            setFinancialResources(updatedFinancialResources);
            break;
      
          case 'materialResources':
            const updatedMaterialResources = [...materialResources];
            updatedMaterialResources.splice(index, 1);
            setMaterialResources(updatedMaterialResources);
            break;
      
          case 'immaterialResources':
            const updatedImmaterialResources = [...immaterialResources];
            updatedImmaterialResources.splice(index, 1);
            setImmaterialResources(updatedImmaterialResources);
            break;
      
          case 'humanResources':
            const updatedHumanResources = [...humanResources];
            updatedHumanResources.splice(index, 1);
            setHumanResources(updatedHumanResources);
            break;
      
          case 'communityResources':
            const updatedCommunityResources = [...communityResources];
            updatedCommunityResources.splice(index, 1);
            setCommunityResources(updatedCommunityResources);
            break;
      
          default:
            break;
        }
      };

      
    return (
      <div>
        <h3>3 - Ressources des entrepreneurs :</h3>
        <p>Faites l'inventaire de vos ressources collectives que vous mettrez à la disposition de l’entreprise :</p>
  
        <table>
          <thead>
            <tr>
              <th>Ressources financières</th>
              <th>Fondateur</th>
              <th>Description et quantité</th>
              <th>Disponibilité</th>
            </tr>
          </thead>
          <tbody>
            {financialResources.map((resource, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={resource.financial}
                    onChange={(e) => handleResourceChange(index, 'financial', e.target.value, 'financialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.founder}
                    onChange={(e) => handleResourceChange(index, 'founder', e.target.value, 'financialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.description}
                    onChange={(e) => handleResourceChange(index, 'description', e.target.value, 'financialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.availability}
                    onChange={(e) => handleResourceChange(index, 'availability', e.target.value, 'financialResources')}
                  />
                </td>
                {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveRow('financialResources', index)}>
          X
        </button>
      )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleAddRow('financialResources')}>Ajouter une ressource financiére</button>
  
        <table>
          <thead>
            <tr>
              <th>Ressources matérielles</th>
              <th>Fondateur</th>
              <th>Description et quantité</th>
              <th>Disponibilité</th>
            </tr>
          </thead>
          <tbody>
            {materialResources.map((resource, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={resource.material}
                    onChange={(e) => handleResourceChange(index, 'material', e.target.value, 'materialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.founder}
                    onChange={(e) => handleResourceChange(index, 'founder', e.target.value, 'materialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.description}
                    onChange={(e) => handleResourceChange(index, 'description', e.target.value, 'materialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.availability}
                    onChange={(e) => handleResourceChange(index, 'availability', e.target.value, 'materialResources')}
                  />
                </td>
                {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveRow('materialResources', index)}>
          X
        </button>
      )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleAddRow('materialResources')}>Ajouter une ressource matérielle</button>
  
        <table>
          <thead>
            <tr>
              <th>Ressources immatérielles</th>
              <th>Fondateur</th>
              <th>Description et quantité</th>
              <th>Disponibilité</th>
            </tr>
          </thead>
          <tbody>
            {immaterialResources.map((resource, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={resource.immaterial}
                    onChange={(e) => handleResourceChange(index, 'immaterial', e.target.value, 'immaterialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.founder}
                    onChange={(e) => handleResourceChange(index, 'founder', e.target.value, 'immaterialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.description}
                    onChange={(e) => handleResourceChange(index, 'description', e.target.value, 'immaterialResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.availability}
                    onChange={(e) => handleResourceChange(index, 'availability', e.target.value, 'immaterialResources')}
                  />
                </td>
                {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveRow('immaterialResources', index)}>
          X
        </button>
      )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleAddRow('immaterialResources')}>Ajouter une ressource immatérielle</button>
  
        <table>
          <thead>
            <tr>
              <th>Ressources humaines</th>
              <th>Fondateur</th>
              <th>Description et quantité</th>
              <th>Disponibilité</th>
            </tr>
          </thead>
          <tbody>
            {humanResources.map((resource, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={resource.human}
                    onChange={(e) => handleResourceChange(index, 'human', e.target.value, 'humanResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.founder}
                    onChange={(e) => handleResourceChange(index, 'founder', e.target.value, 'humanResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.description}
                    onChange={(e) => handleResourceChange(index, 'description', e.target.value, 'humanResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.availability}
                    onChange={(e) => handleResourceChange(index, 'availability', e.target.value, 'humanResources')}
                  />
                </td>
                {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveRow('humanResources', index)}>
          X
        </button>
      )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleAddRow('humanResources')}>Ajouter une ressource humaine</button>
  
        <table>
          <thead>
            <tr>
              <th>Ressources communautaires</th>
              <th>Description</th>
              <th>Disponibilité</th>
              <th>Risques</th>
            </tr>
          </thead>
          <tbody>
            {communityResources.map((resource, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={resource.community}
                    onChange={(e) => handleResourceChange(index, 'community', e.target.value, 'communityResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.description}
                    onChange={(e) => handleResourceChange(index, 'description', e.target.value, 'communityResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.availability}
                    onChange={(e) => handleResourceChange(index, 'availability', e.target.value, 'communityResources')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={resource.risks}
                    onChange={(e) => handleResourceChange(index, 'risks', e.target.value, 'communityResources')}
                  />
                </td>
                {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveRow('communityResources', index)}>
          X
        </button>
      )}
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => handleAddRow('communityResources')}>Ajouter une ressource communautaire</button>
        <h3>4 - Proposition d'idées d'entreprise :</h3>
<p>Étudiez l'inventaire de vos ressources et proposez trois idées d'entreprises que vous pouvez lancer en les exploitant :</p>
<ol className='ideas-container'>
  <li>
    <input
      type='text'
      value={idea1}
      onChange={(e) => setIdea1(e.target.value)}
      placeholder='Idée 1'/>
  </li>
  <li>
    <input
      type='text'
      value={idea2}
      onChange={(e) => setIdea2(e.target.value)}
      placeholder='Idée 2'
    />
  </li>
  <li>
    <input
      type='text'
      value={idea3}
      onChange={(e) => setIdea3(e.target.value)}
      placeholder='Idée 3'
    />
  </li>
</ol>

      
      </div>
      
    );
  };
  
  export default ResourcesComponent;
  