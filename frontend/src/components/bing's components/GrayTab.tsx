import React from 'react'

interface GrayTabProps {
  title: string;
}

const GrayTab: React.FC<GrayTabProps> = ({ title }) => {
    return (
      <div className="graytab">
        <h3>{title}</h3>
      </div>
    );
  };

export default GrayTab;