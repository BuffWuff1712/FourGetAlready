import React, { useState } from 'react';
import Sidebar from './Sidebar';
import CourseDetails from './CourseDetails';
import '../../assets/styles/Coursepage.css'
import { useNavigate } from 'react-router-dom';



const Coursepage: React.FC = () => {
    const [selectedContent, setSelectedContent] = useState<string>('overview'); // Default content
    const handleSelect = (content: string) => {
      setSelectedContent(content); // Update the content based on sidebar button click
    };
    const navigate = useNavigate(); // Initialize the navigate function
    
    return (
    <div className="coursepage">
      <Sidebar onSelect={handleSelect}/>
      <CourseDetails content={selectedContent} />
      <button className="main-menu-button" onClick={() => navigate('/')}>Main Menu</button>
    </div>
  );
};

export default Coursepage;
