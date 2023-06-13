import React, { useState } from 'react';

function EntrepreneurForm() {
  const [hasIdea, setHasIdea] = useState(null); // Initially set to null, can be 'yes' or 'no'

  const handleRadioChange = (e) => {
    setHasIdea(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    console.log('Has Idea:', hasIdea);
  };

  return (
    <div className="entrepreneur-form">
      <h2>Entrepreneur Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="yes"
              checked={hasIdea === 'yes'}
              onChange={handleRadioChange}
            />
            Yes, I already have an idea or startup.
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="no"
              checked={hasIdea === 'no'}
              onChange={handleRadioChange}
            />
            No, I don't have an idea or startup yet.
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EntrepreneurForm;
