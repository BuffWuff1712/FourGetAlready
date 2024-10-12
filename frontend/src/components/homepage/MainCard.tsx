import React from 'react';
import '../../assets/styles/MainCard.css'; // Import the CSS file for styling

interface CardProps {
  title: string;
  description: string;
}

const MainCard: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="maincard">
        <h2 className="maincard-title">{title}</h2>
        <p className="maincard-description">{description}</p>
        <button className="maincard-button">Get Started</button>
    </div>
  );
};

export default MainCard;
