import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Coursepage from './components/course_page/Coursepage';
import Resultpage from './components/result_page/Resultpage';

const App: React.FC = () => {

  return (
    <div className="app">
          <Router>
            <div className="main-content">
              <Routes>
                {/* Route for the Dashboard, which contains the Placards */}
                <Route path="/" element={<Homepage />} />
                <Route path="coursepage" element={<Coursepage />} />
                <Route path="resultpage" element={<Resultpage />} />
              </Routes>
            </div>
          </Router>
        </div>
  );
};

export default App;
