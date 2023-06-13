import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpCoach() {

    const coachingFields = [
        "Business coaching",
        "Career coaching",
        "Leadership coaching",
        "Executive coaching",
        "Life coaching",
        "Health and wellness coaching",
        "Financial coaching",
        "Relationship coaching",
        "Personal development coaching",
        "Team coaching",
        "Communication coaching",
        "Performance coaching",
        "Sales coaching",
        "Time management coaching",
        "Mindfulness coaching",
        "Creativity coaching",
        "Transition coaching",
        "Strategic planning coaching",
        "Success coaching",
        "Other"
      ];
      
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  // Form fields
  const [companyName, setCompanyName] = useState('');
  const [businessField, setBusinessField] = useState('');
  const [bio, setBio] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');
  // Add more fields as needed

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or data handling here
    // You can access all the form field values here and submit the data to your backend or perform any necessary actions
    console.log({
      companyName,
      businessField,
      bio,
      linkedin,
      website
      ,
      // Add more fields as needed
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2 className='step-title'>Step 2: Professional Information</h2>
            <div className="form-element">
              <label htmlFor="companyName">Company Name:</label>
              <input
              className ="input-container"
                type="text"
                id="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter your company name"
              />
            </div>
            <div className="form-element">
              <label htmlFor="businessField">Business Field:</label>
              <div >
                <select className="scrollable-field" id="businessField" value={businessField} onChange={(e) => setBusinessField(e.target.value)} >
                    <option value="">Select your business field</option>
                        {coachingFields.map((field) => (
                            <option key={field} value={field}>
                            {field}
                    </option>
                    ))}
                </select>

              </div>
              <div class="form-group">
                <label for="certification">Certificate:</label>
                <input type="file" id="certificate" name="certificate"></input>
            </div>
              </div>
            <div className="buttons">
            <button onClick={() => navigate(-1)}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
          </div>
        );
      case 2:
        return (
          <div className="form-step">
            <h2 className='step-title'>Step 3: Profile Information</h2>
            <div className="form-element">
            <div class="form-group">
                <label for="picture">Profile Picture:</label>
                <input type="file" id="picture" name="picture"></input>
            </div>
                </div>
            <div className="form-element">
              <label htmlFor="bio">Bio/Introduction:</label>
              <textarea
              className ="input-container"
                id="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write a short bio or introduction"
              ></textarea>
            </div>
            
            <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
          </div>
        );
      case 3:
        return (
          <div className="form-step">
            <h2 className='step-title'>Step 4: Social Media Links</h2>
            <div className="form-element">
              <label htmlFor="linkedin">LinkedIn Profile:</label>
              <input
              className ="input-container"
                type="text"
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="Enter your LinkedIn profile URL"
              />
            </div>
            <div className="form-element">
              <label htmlFor="website">Website:</label>
              <input
              className ="input-container"
                type="text"
                id="website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your Website URL"
              />
            </div>
            <div className="buttons">
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleSubmit}>Submit</button>
          </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form">
      {renderStep()}
    </div>
  );
}

export default SignUpCoach;
