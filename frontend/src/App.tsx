import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Coursepage from './components/course_page/Coursepage';
import UserProfileForm from './components/user_profile_page/UserProfileForm';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <div className="main-content">
          {/* Long text box for the prompt */}
          <input
            type="text"
            placeholder="Get started with your learning"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              marginBottom: '20px',
            }}
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/user-profile" element={<UserProfileForm />} />
            <Route path="/coursepage" element={<Coursepage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
