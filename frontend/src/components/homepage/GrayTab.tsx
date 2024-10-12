import React from 'react'
import '../../assets/styles/GrayTab.css'; // Import the CSS file for this component

interface GrayTabProps {
  title: string;
}

const GrayTab: React.FC<GrayTabProps> = ({ title }) => {
    return (
      <button className="graytab">
        <h3>{title}</h3>
      </button>
    );
  };

export default GrayTab;