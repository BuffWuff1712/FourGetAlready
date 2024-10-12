import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../assets/styles/UserProfileForm.css';

const UserProfileForm: React.FC = () => {
  // State to hold the form data
  const [currentJob, setCurrentJob] = useState('');
  const [careerAspiration, setCareerAspiration] = useState('');
  const [skillSet, setSkillSet] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize navigate
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Log the form data (replace with your desired function)
    console.log({ currentJob, careerAspiration, skillSet });

    // Set user feedback/message
    setSubmitMessage('Profile information submitted successfully!');

    // Reset the form fields
    setCurrentJob('');
    setCareerAspiration('');
    setSkillSet('');
  };

  return (
    <div className="user-profile-container"> {/* Parent container for centering */}
      <div className="user-profile-form">
        <h2>User Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="current-job">Current Job:</label>
            <input
              type="text"
              id="current-job"
              value={currentJob}
              onChange={(e) => setCurrentJob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="career-aspiration">Career Aspiration:</label>
            <input
              type="text"
              id="career-aspiration"
              value={careerAspiration}
              onChange={(e) => setCareerAspiration(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="skill-set">Skill Set:</label>
            <textarea
              id="skill-set"
              value={skillSet}
              onChange={(e) => setSkillSet(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {submitMessage && <p className="submit-message">{submitMessage}</p>}

        {/* Back Button */}
        <button className="back-button" onClick={() => navigate('/')}>Back to Main Menu</button>
      </div>
    </div>
  );
};

export default UserProfileForm;
