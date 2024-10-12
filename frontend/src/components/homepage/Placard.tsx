import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/Placard.css'; // Import the CSS file for this component



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
  textColor = '#000',          // Default text colour
  courseCodeColor = '#007bff'  // Default course code colour
}) => {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSelect = () => {
    // Navigate to the desired course details page when the placard is clicked
    navigate('/Coursepage');;
  }

  return (
      <div className="placard" onClick={handleSelect}>
        <div className="placard-header" style={{ backgroundColor }}>
          <div className="dots-menu">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
        <div className="placard-content" style={{ color: textColor }}>
          <h3 className="placard-title">{title}</h3>
          <h4 className="placard-code" style={{ color: courseCodeColor }}>{courseCode}</h4>
          <p className="placard-category">{category}</p>
        </div>
      </div>
  );
};

export default Placard;
