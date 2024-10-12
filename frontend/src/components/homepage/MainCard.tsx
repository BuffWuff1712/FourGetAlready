import React from 'react';
import '../../assets/styles/MainCard.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
}

const MainCard: React.FC<CardProps> = ({ title, description }) => {
  const navigate = useNavigate();

  return (
    <div className="maincard">
        <h2 className="maincard-title">{title}</h2>
        <p className="maincard-description">{description}</p>
        <button className="maincard-button" onClick={() => navigate('/resultpage') }>Get Started</button>
    </div>
  );
};

export default MainCard;
