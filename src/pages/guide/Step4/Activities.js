import React, { useState } from 'react';

function Activities() {
  const [organizedActivities, setOrganizedActivities] = useState([
    { activity: '', currentProcess: '', improvementIdeas: '', newProcess: '' }
  ]);
  const [unorganizedActivities, setUnorganizedActivities] = useState([
    { activity: '', sensitivity: '', reason: '', newProcess: '' }
  ]);

  const handleActivityChange = (index, type, value, activityType) => {
    switch (activityType) {
      case 'organizedActivities':
        const updatedOrganizedActivities = [...organizedActivities];
        updatedOrganizedActivities[index][type] = value;
        setOrganizedActivities(updatedOrganizedActivities);
        break;
      case 'unorganizedActivities':
        const updatedUnorganizedActivities = [...unorganizedActivities];
        updatedUnorganizedActivities[index][type] = value;
        setUnorganizedActivities(updatedUnorganizedActivities);
        break;
      default:
        break;
    }
  };

  const handleAddActivityRow = (activityType) => {
    switch (activityType) {
      case 'organizedActivities':
        setOrganizedActivities([...organizedActivities, { activity: '', currentProcess: '', improvementIdeas: '', newProcess: '' }]);
        break;
      case 'unorganizedActivities':
        setUnorganizedActivities([...unorganizedActivities, { activity: '', sensitivity: '', reason: '', newProcess: '' }]);
        break;
      default:
        break;
    }
  };

  const handleRemoveActivityRow = (activityType, index) => {
    switch (activityType) {
      case 'organizedActivities':
        const updatedOrganizedActivities = [...organizedActivities];
        updatedOrganizedActivities.splice(index, 1);
        setOrganizedActivities(updatedOrganizedActivities);
        break;
      case 'unorganizedActivities':
        const updatedUnorganizedActivities = [...unorganizedActivities];
        updatedUnorganizedActivities.splice(index, 1);
        setUnorganizedActivities(updatedUnorganizedActivities);
        break;
      default:
        break;
    }
  };

  return (
    <div >
      <h3>4. Les activités <u>organisées</u> sous forme de procédures écrites :</h3>
      <table >
        <thead>
          <tr>
            <th>Activité</th>
            <th>Processus actuel</th>
            <th>Pistes d'amélioration</th>
            <th>Nouveau processus</th>
          </tr>
        </thead>
        <tbody>
          {organizedActivities.map((activity, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={activity.activity}
                  onChange={(e) => handleActivityChange(index, 'activity', e.target.value, 'organizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.currentProcess}
                  onChange={(e) => handleActivityChange(index, 'currentProcess', e.target.value, 'organizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.improvementIdeas}
                  onChange={(e) => handleActivityChange(index, 'improvementIdeas', e.target.value, 'organizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.newProcess}
                  onChange={(e) => handleActivityChange(index, 'newProcess', e.target.value, 'organizedActivities')}
                />
              </td>
              {index > 0 && (
        <button className='remove-button' onClick={() =>  handleRemoveActivityRow('organizedActivities', index)}>
          X
        </button>
              )}
             
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAddActivityRow('organizedActivities')}>Add Activity</button>

      <h3>5. Les activités <u>non organisées</u> sous forme de procédures écrites :</h3>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Activité</th>
            <th>Sensibilité de l'activité</th>
            <th>Pourquoi non organisée ?</th>
            <th>Nouveau processus</th>
          </tr>
        </thead>
        <tbody>
          {unorganizedActivities.map((activity, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={activity.activity}
                  onChange={(e) => handleActivityChange(index, 'activity', e.target.value, 'unorganizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.sensitivity}
                  onChange={(e) => handleActivityChange(index, 'sensitivity', e.target.value, 'unorganizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.reason}
                  onChange={(e) => handleActivityChange(index, 'reason', e.target.value, 'unorganizedActivities')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={activity.newProcess}
                  onChange={(e) => handleActivityChange(index, 'newProcess', e.target.value, 'unorganizedActivities')}
                />
              </td>
              
              {index > 0 && (
        <button className='remove-button' onClick={() =>  handleRemoveActivityRow('unorganizedActivities', index)}>
          X
        </button>
              )}
             
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => handleAddActivityRow('unorganizedActivities')}>Add Activity</button>
    </div>
  );
}

export default Activities;
