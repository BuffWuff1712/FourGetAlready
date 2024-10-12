import React from 'react';
import '../../assets/styles/DescriptionContainer.css'; // Import the CSS file for this component

interface DescriptionContainerProps {
  title: string;
  courseCode: string;
  category: string;
  backgroundColor?: string;  // Optional prop for background colour
  textColor?: string;        // Optional prop for text colour
  courseCodeColor?: string;  // Optional prop for course code colour
}

const DescriptionContainer: React.FC<DescriptionContainerProps> = ({ 
  title, 
  courseCode, 
  category, 
  backgroundColor = '#2d4b4e', // Default background colour
  textColor = '#333',          // Default text colour
  courseCodeColor = '#007bff'  // Default course code colour
}) => {
  return (
    <div className="placard">
      <div className="placard-content" style={{ color: textColor }}>
        <h3 className="course-title">{title}</h3>
        <h4 className="course-code" style={{ color: courseCodeColor }}>{courseCode}</h4>
      </div>
    </div>
  );
};

export default DescriptionContainer;
