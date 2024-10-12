import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Coursepage from './components/course_page/Coursepage';

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
                  marginBottom: '20px'
                }}
              />
              <Routes>
                {/* Route for the Dashboard, which contains the Placards */}
                <Route path="/" element={<Homepage />} />
                <Route path="coursepage" element={<Coursepage />} />
              </Routes>
            </div>
          </Router>
        </div>
  );
};

export default App;
