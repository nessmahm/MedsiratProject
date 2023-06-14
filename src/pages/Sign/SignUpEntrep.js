import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignUpEntrepreneur() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const ReasonsField = [
    "I want to connect with like-minded individuals and build a supportive community",
    "I am looking for resources and tools to help me launch and grow my startup",
    "I want to stay updated on industry trends and gain insights from experts",
    "I am seeking mentorship and guidance from experienced entrepreneurs",
    "I want to discover potential investment opportunities",
    "I am interested in networking and finding potential collaborators",
    "I want to showcase my startup and gain exposure",
    "I am looking for educational content and learning opportunities",
    "I want to explore funding options and pitch my startup to investors",
    // Add more suitable reasons as needed
  ];
  

  // Form fields
  const [workSituation, setWorkSituation] = useState('');
  const [otherWorkSituation, setOtherWorkSituation] = useState('');
  const [student, setStudent] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [university, setUniversity] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [resume, setResume] = useState('');
  const [startup, setStartup] = useState('');
  const [startupURL, setStartupURL] = useState('');
  const [startupIntro, setStartupIntro] = useState('');
  const [reasonToUseApp, setReasonToUseApp] = useState('');

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
      student,
      fieldOfStudy,
      university,
      companyName,
      jobTitle,
      linkedin,
      resume,
      startup,
      startupURL,
      startupIntro,
      reasonToUseApp,
      // Add more fields as needed
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="form-step">
            <h2 className="step-title">Step 2: Professional Information</h2>
            <div className="form-element">
              <label htmlFor="workSituation">Work Situation:</label>
              <select
                className="scrollable-field"
                id="workSituation"
                value={workSituation}
                onChange={(e) => setWorkSituation(e.target.value)}
              >
                <option value="">Select your work situation</option>
                <option value="student">Student</option>
                <option value="worker">Worker</option>
                <option value="other">Other</option>
              </select>
            </div>
            {workSituation === 'student' && (
              <div>
                <div className="form-element">
                  <label htmlFor="university">University:</label>
                  <input
                    className="input-container"
                    type="text"
                    id="university"
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    placeholder="Enter your university"
                  />
                </div>
                <div className="form-element">
                  <label htmlFor="fieldOfStudy">Field of Study:</label>
                  <input
                    className="input-container"
                    type="text"
                    id="fieldOfStudy"
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                    placeholder="Enter your field of study"
                  />
                </div>
              </div>
            )}
            {workSituation === 'worker' && (
              <div>
              <div className="form-element">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  className="input-container"
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enter your company name"
                />
              </div>
              <div className="form-element">
              <label htmlFor="jobTitle">Job Title:</label>
              <input
                className="input-container"
                type="text"
                id="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter your job title"
              />
            </div>
          </div>
            )}
             {workSituation === 'other' && (
              <div className="form-element">
                <label htmlFor="otherWorkSituation">Specify your work situation:</label>
                <input
                  className="input-container"
                  type="text"
                  id="otherWorkSituation"
                  value={otherWorkSituation}
                  onChange={(e) => setOtherWorkSituation(e.target.value)}
                  placeholder="Enter your work situation"
                />
              </div>
            )}
            <div className="form-element">
              <label htmlFor="linkedin">LinkedIn Profile:</label>
              <input
                className="input-container"
                type="text"
                id="linkedin"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="Enter your LinkedIn profile URL"
              />
            </div>
            <div class="form-group">
                <label for="resume">Resume:</label>
                <input type="file" id="resume" name="resume"></input>
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
              <h2 className="step-title">Step 3: Startup Information</h2>
              <div className="form-element">
                <label htmlFor="startup">Do you have a startup or idea?</label>
                <div className="radio-group">
                  <label>
                    <input
                      type="radio"
                      name="startup"
                      value="yes"
                      checked={startup === 'yes'}
                      onChange={() => setStartup('yes')}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="startup"
                      value="no"
                      checked={startup === 'no'}
                      onChange={() => setStartup('no')}
                    />
                    No
                  </label>
                </div>
              </div>
              {(startup === 'yes') &&  (
                <div>
                  <div className="form-element">
                    <label htmlFor="startupURL">Startup Website/Social Media URL:</label>
                    <input
                      className="input-container"
                      type="text"
                      id="startupURL"
                      value={startupURL}
                      onChange={(e) => setStartupURL(e.target.value)}
                      placeholder="Enter your startup website or social media URL"
                    />
                  </div>
                  <div className="form-element">
                    <label htmlFor="startupIntro">Startup Introduction:</label>
                    <textarea
                      className="input-container"
                      id="startupIntro"
                      value={startupIntro}
                      onChange={(e) => setStartupIntro(e.target.value)}
                      placeholder="Write a short introduction about your startup"
                    ></textarea>
                  </div>
                </div>
              )}
            <div className="form-element">
                  <label htmlFor="reasonToUseApp">Why do you want to use this app?</label>
                  <select className="scrollable-field" id="reasonToUseApp" value={reasonToUseApp} onChange={(e) => setReasonToUseApp(e.target.value)} >
                    <option value="">Select an option</option>
                        {ReasonsField.map((field) => (
                            <option key={field} value={field}>
                            {field}
                    </option>
                    ))}
                </select>
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

export default SignUpEntrepreneur;
