import React,{useState} from 'react'



const CapacitiesForm = () => {
    const [capabilities, setCapabilities] = useState([
        { category: 'Mes compétences techniques', strengths: '', weaknesses: '', actions: '' },
        { category: 'Mes Soft Skills', strengths: '', weaknesses: '', actions: '' },
        { category: 'Ma situation personnelle', strengths: '', weaknesses: '', actions: '' },
        { category: 'Mon réseau professionnel', strengths: '', weaknesses: '', actions: '' }
      ]);

        const handleCapabilityChange = (index, field, value) => {
            const updatedCapabilities = [...capabilities];
            updatedCapabilities[index][field] = value;
            setCapabilities(updatedCapabilities);
            };

    return (
        <div>
        <h3>2. Capacités des entrepreneurs : </h3>
        <p> Faites l'inventaire de vos capacités et lacunes dans le tableau suivant et précisez les actions à entreprendre pour se développer :</p>
<ol>
  <li>- Comment profiter de vos capacités ?</li>
  <li>- Comment corriger vos lacunes?</li>
</ol>
<table className='table-to-change'>
  <thead>
    <tr>
      <th></th>
      <th>Mes capacités</th>
      <th>Mes lacunes</th>
      <th>Actions à entreprendre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='td-title'>Mes compétences techniques</td>
      <td>
        <textarea
          value={capabilities[0].strengths}
          onChange={(e) => handleCapabilityChange(0, 'strengths', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[0].weaknesses}
          onChange={(e) => handleCapabilityChange(0, 'weaknesses', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[0].actions}
          onChange={(e) => handleCapabilityChange(0, 'actions', e.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td className='td-title'>Mes Soft Skills</td>
      <td>
        <textarea
          value={capabilities[1].strengths}
          onChange={(e) => handleCapabilityChange(1, 'strengths', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[1].weaknesses}
          onChange={(e) => handleCapabilityChange(1, 'weaknesses', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[1].actions}
          onChange={(e) => handleCapabilityChange(1, 'actions', e.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td className='td-title'>Ma situation personnelle</td>
      <td>
        <textarea
          value={capabilities[2].strengths}
          onChange={(e) => handleCapabilityChange(2, 'strengths', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[2].weaknesses}
          onChange={(e) => handleCapabilityChange(2, 'weaknesses', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[2].actions}
          onChange={(e) => handleCapabilityChange(2, 'actions', e.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td className='td-title'>Mon réseau professionnel</td>
      <td>
        <textarea
          value={capabilities[3].strengths}
          onChange={(e) => handleCapabilityChange(3, 'strengths', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[3].weaknesses}
          onChange={(e) => handleCapabilityChange(3, 'weaknesses', e.target.value)}
        />
      </td>
      <td>
        <textarea
          value={capabilities[3].actions}
          onChange={(e) => handleCapabilityChange(3, 'actions', e.target.value)}
        />
      </td>
    </tr>
  </tbody>
</table>
        </div>

    )
}

export default CapacitiesForm