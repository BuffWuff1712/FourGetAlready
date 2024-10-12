import React from 'react';
import '../../assets/styles/Card.css'; // Import the CSS file for styling

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image URL prop
  children?: React.ReactNode; // Allows additional custom content like buttons or other components
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, children }) => {
  return (
    <div className="card">
      {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {children && <div className="card-extra">{children}</div>} {/* Extra content like buttons or links */}
      </div>
    </div>
  );
};

export default Card;
