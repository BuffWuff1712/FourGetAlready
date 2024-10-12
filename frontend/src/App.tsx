import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Coursepage from './components/course_page/Coursepage';
import UserProfileForm from './components/user_profile_page/UserProfileForm';
import LearningInput from './components/LearningInput';
import Resultpage from './components/result_page/Resultpage';


const App: React.FC = () => {
  return (
    <div className="app">
          <Router>
            <div className="main-content">
              <LearningInput />
              <Routes>
                {/* Route for the Dashboard, which contains the Placards */}
                <Route path="/" element={<Homepage />} />
                <Route path="coursepage" element={<Coursepage />} />
                <Route path="resultpage" element={<Resultpage />} />
              </Routes>
            </div>
          </Router>
        </div>
        <Routes>
          <Route path="/user-profile" element={<UserProfileForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
