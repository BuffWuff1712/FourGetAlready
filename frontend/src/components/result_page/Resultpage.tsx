import React, { useState } from 'react';
import axios from 'axios';
import '../../assets/styles/Resultpage.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';
import CareerProgress from './CareerProgress';

// Define the structure of the recommendation object
interface Recommendation {
  careers: string[];
  courses: string[];
}

const Resultpage = () => {
  const [role, setRole] = useState('');
  const [skills, setSkills] = useState('');
  const [goals, setGoals] = useState('');
  const [preferences, setPreferences] = useState('');
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);  // Define the type for recommendation
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    // Convert skills string into an array (assuming user inputs a comma-separated list of skills)
    const skillsArray = skills.split(',').map(skill => skill.trim());

    const data = {
      current_role: role,
      skills: skillsArray,
      career_goals: goals,
      preferences: preferences,
    };

    try {
      const response = await axios.post('http://localhost:5000/recommend', data);
      setRecommendation(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    } finally {
      setLoading(false); // Set loading to false once the request is complete
    }
  };

  return (
      <div className="resultpage">
        <div className="resultitems">
        <button className="resultpage-homebutton" onClick={() => navigate('/')}>Back to Home</button>
        <h1>Career Path & Upskilling Recommendations</h1>
        <form onSubmit={handleSubmit} className="questionnaire-form">
          <div className="form-group">
            <label>Current Role:</label>
            <input
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g., Software Developer"
            />
          </div>
          <div className="form-group">
            <label>Skills (comma separated):</label>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., Python, React, Data Analysis"
            />
          </div>
          <div className="form-group">
            <label>Career Goals:</label>
            <input
              type="text"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
              placeholder="e.g., Senior Developer, Project Manager"
            />
          </div>
          <div className="form-group">
            <label>Learning Preferences:</label>
            <input
              type="text"
              value={preferences}
              onChange={(e) => setPreferences(e.target.value)}
              placeholder="e.g., Project-based learning"
            />
          </div>
          <button type="submit" className="submit-button">
            {loading ? 'Loading...' : 'Get Recommendations'}
          </button>
        </form>

        {recommendation && (
          <div className="recommendation-results">
            <h2>Recommended Career Path:</h2>
            <CareerProgress data={recommendation.careers}/>
            <h2>Suggested Courses:</h2>
            <ul>
              {recommendation.courses.map((course: string, index: number) => (
                <div style={{ backgroundColor: "#f4f4f4", display: 'flex', flexDirection: 'row', 
                alignItems: 'center', marginBottom: '10px', padding: '10px', borderRadius: '5px', justifyContent: 'space-between'}}>
                <span key={index} style={{fontSize: '1.2rem', marginRight: '10px' }}>
                  {course}
                </span>
                <button className="enroll-button">
                  Enroll
                </button>
                </div>
              ))}
            </ul>
          </div>
        )}
        </div>
      </div>
  );
};

export default Resultpage;
