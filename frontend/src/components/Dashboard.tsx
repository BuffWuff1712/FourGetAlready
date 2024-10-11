import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [careerGoals, setCareerGoals] = useState<string>('');
  const [currentSkills, setCurrentSkills] = useState<string>('');
  const [learningPreferences, setLearningPreferences] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Career Goals:', careerGoals);
    console.log('Current Skills:', currentSkills);
    console.log('Learning Preferences:', learningPreferences);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Career Goals:</label>
          <textarea
            rows={4}
            value={careerGoals}
            onChange={(e) => setCareerGoals(e.target.value)}
            placeholder="Enter your career goals here..."
          />
        </div>
        <div>
          <label>Current Skills:</label>
          <textarea
            rows={4}
            value={currentSkills}
            onChange={(e) => setCurrentSkills(e.target.value)}
            placeholder="Enter your current skills here..."
          />
        </div>
        <div>
          <label>Learning Preferences:</label>
          <textarea
            rows={4}
            value={learningPreferences}
            onChange={(e) => setLearningPreferences(e.target.value)}
            placeholder="Enter your learning preferences here..."
          />
        </div>
        <button type="submit">Save Profile</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;