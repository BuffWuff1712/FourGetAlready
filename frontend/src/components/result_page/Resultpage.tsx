import React, { useState } from 'react';
import axios from 'axios';

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

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("Pressed");
    e.preventDefault();

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
      setRecommendation(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  return (
    <div className="homepage">
      <h1>Career Path & Upskilling Recommendations</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Current Role:</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div>
          <label>Skills (comma separated):</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div>
          <label>Career Goals:</label>
          <input
            type="text"
            value={goals}
            onChange={(e) => setGoals(e.target.value)}
          />
        </div>
        <div>
          <label>Learning Preferences:</label>
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
          />
        </div>
        <button type="submit">Get Recommendations</button>
      </form>

      {recommendation && (
        <div className="recommendation">
          <h2>Recommended Career Path:</h2>
          <ul>
            {recommendation.careers.map((career: string, index: number) => (
              <li key={index}>{career}</li>
            ))}
          </ul>

          <h2>Suggested Courses:</h2>
          <ul>
            {recommendation.courses.map((course: string, index: number) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Resultpage;
