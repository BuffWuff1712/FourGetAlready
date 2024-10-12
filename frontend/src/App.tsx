import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Coursepage from './components/course_page/Coursepage';
import UserProfileForm from './components/user_profile_page/UserProfileForm';
import LearningInput from './components/LearningInput';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        <div className="main-content">
          {/* Extracted Long text box for the prompt */}
          <LearningInput />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/coursepage" element={<Coursepage />} />
          </Routes>
        </div>
        <Routes>
          <Route path="/user-profile" element={<UserProfileForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
