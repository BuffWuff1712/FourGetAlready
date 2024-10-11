import React from 'react';
import './Placard.css'; // Import the CSS file for this component

interface PlacardProps {
  title: string;
  courseCode: string;
  category: string;
  backgroundColor?: string;  // Optional prop for background colour
  textColor?: string;        // Optional prop for text colour
  courseCodeColor?: string;  // Optional prop for course code colour
}

const Placard: React.FC<PlacardProps> = ({ 
  title, 
  courseCode, 
  category, 
  backgroundColor = '#2d4b4e', // Default background colour
  textColor = '#333',          // Default text colour
  courseCodeColor = '#007bff'  // Default course code colour
}) => {
  return (
    <div className="placard">
      <div className="placard-header" style={{ backgroundColor }}>
        <div className="dots-menu">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
      <div className="placard-content" style={{ color: textColor }}>
        <h3 className="course-title">{title}</h3>
        <h4 className="course-code" style={{ color: courseCodeColor }}>{courseCode}</h4>
        <p className="course-category">{category}</p>
      </div>
    </div>
  );
};

export default Placard;
