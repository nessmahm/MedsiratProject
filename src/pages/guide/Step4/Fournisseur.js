import React, { useState } from 'react';

function Fournisseur() {
  const [rawMaterialSuppliers, setRawMaterialSuppliers] = useState([{ supplier: '', tested: '', strengths: '', weaknesses: '', decision: '' }]);
  const [packagingPartners, setPackagingPartners] = useState([{ partner: '', tested: '', strengths: '', weaknesses: '', decision: '' }]);

  const handleSupplierChange = (index, type, value, resourceType) => {
    switch (resourceType) {
      case 'rawMaterialSuppliers':
        const updatedRawMaterialSuppliers = [...rawMaterialSuppliers];
        updatedRawMaterialSuppliers[index][type] = value;
        setRawMaterialSuppliers(updatedRawMaterialSuppliers);
        break;
      case 'packagingPartners':
        const updatedPackagingPartners = [...packagingPartners];
        updatedPackagingPartners[index][type] = value;
        setPackagingPartners(updatedPackagingPartners);
        break;
      default:
        break;
    }
  };

  const handleAddSupplierRow = (resourceType) => {
    switch (resourceType) {
      case 'rawMaterialSuppliers':
        setRawMaterialSuppliers([...rawMaterialSuppliers, { supplier: '', tested: '', strengths: '', weaknesses: '', decision: '' }]);
        break;
      case 'packagingPartners':
        setPackagingPartners([...packagingPartners, { partner: '', tested: '', strengths: '', weaknesses: '', decision: '' }]);
        break;
      default:
        break;
    }
  };

  const handleRemoveSupplierRow = (resourceType, index) => {
    switch (resourceType) {
      case 'rawMaterialSuppliers':
        const updatedRawMaterialSuppliers = [...rawMaterialSuppliers];
        updatedRawMaterialSuppliers.splice(index, 1);
        setRawMaterialSuppliers(updatedRawMaterialSuppliers);
        break;
      case 'packagingPartners':
        const updatedPackagingPartners = [...packagingPartners];
        updatedPackagingPartners.splice(index, 1);
        setPackagingPartners(updatedPackagingPartners);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h3>2. Choix des fournisseurs de matières premières :</h3>
      <table className='partners-table'>
        <thead>
          <tr>
            <th>Fournisseur</th>
            <th>Testé ?</th>
            <th>Points forts</th>
            <th>Points faibles</th>
            <th>Décision</th>
          </tr>
        </thead>
        <tbody>
          {rawMaterialSuppliers.map((supplier, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={supplier.supplier}
                  onChange={(e) => handleSupplierChange(index, 'supplier', e.target.value, 'rawMaterialSuppliers')}
                />
              </td>
              <td>
                <select
                  value={supplier.tested}
                  onChange={(e) => handleSupplierChange(index, 'tested', e.target.value, 'rawMaterialSuppliers')}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={supplier.strengths}
                  onChange={(e) => handleSupplierChange(index, 'strengths', e.target.value, 'rawMaterialSuppliers')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={supplier.weaknesses}
                  onChange={(e) => handleSupplierChange(index, 'weaknesses', e.target.value, 'rawMaterialSuppliers')}
                />
              </td>
              <td>
                <select
                  value={supplier.decision}
                  onChange={(e) => handleSupplierChange(index, 'decision', e.target.value, 'rawMaterialSuppliers')}
                >
                  <option value="try">Try</option>
                  <option value="keep">Keep</option>
                  <option value="discard">Discard</option>

                </select>
              </td>
              {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveSupplierRow('rawMaterialSuppliers', index)}>
          X
        </button>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAddSupplierRow('rawMaterialSuppliers')}>Add Supplier</button>

      <h3>3. Choix des partenaires d'emballage :</h3>
      <table className='partners-table'>
        <thead>
          <tr>
            <th>Partenaire</th>
            <th>Testé ?</th>
            <th>Points forts</th>
            <th>Points faibles</th>
            <th>Décision</th>
          </tr>
        </thead>
        <tbody>
          {packagingPartners.map((partner, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={partner.partner}
                  onChange={(e) => handleSupplierChange(index, 'partner', e.target.value, 'packagingPartners')}
                />
              </td>
              <td>
                <select
                  value={partner.tested}
                  onChange={(e) => handleSupplierChange(index, 'tested', e.target.value, 'packagingPartners')}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  value={partner.strengths}
                  onChange={(e) => handleSupplierChange(index, 'strengths', e.target.value, 'packagingPartners')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={partner.weaknesses}
                  onChange={(e) => handleSupplierChange(index, 'weaknesses', e.target.value, 'packagingPartners')}
                />
              </td>
              <td>
                <select
                  value={partner.decision}
                  onChange={(e) => handleSupplierChange(index, 'decision', e.target.value, 'packagingPartners')}
                >
                  <option value="try">Try</option>
                  <option value="keep">Keep</option>
                  <option value="discard">Discard</option>

                </select>
              </td>
              {index > 0 && (
        <button className='remove-button' onClick={() => handleRemoveSupplierRow('packagingPartners', index)}>
          X
        </button>
      )}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAddSupplierRow('packagingPartners')}>Add Partner</button>
    </div>
  );
}

export default Fournisseur;
