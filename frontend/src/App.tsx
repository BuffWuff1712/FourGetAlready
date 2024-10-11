import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/course_page/justin/Sidebar';
import CourseDetails from './components/course_page/justin/CourseDetails';

const App: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string>('overview'); // Default content

  const handleSelect = (content: string) => {
    setSelectedContent(content); // Update the content based on sidebar button click
  };

  return (
    <div className="app">
      <Sidebar onSelect={handleSelect} />
      <CourseDetails content={selectedContent} />
      <button className="main-menu-button">Main Menu</button>
    </div>
  );
};

export default App;