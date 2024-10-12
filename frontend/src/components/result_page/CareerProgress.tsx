import React, { useState } from 'react';
import '../../assets/styles/CareerProgress.css'; // Import the CSS file for styling

interface CareerProgressProps {
  data: string[];  // Expecting an array of career steps as strings
}

const CareerProgress: React.FC<CareerProgressProps> = ({ data }) => {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);

  const careerStages = ["Learn","Grow", "Lead"];

  const handleStepClick = (step: string) => {
    setSelectedStep(step);  // Set the clicked step as selected
  };

  return (
    <div className="career-progression">
      {data.map((step, index) => (
        <div
          key={index}
          className={`step ${selectedStep === step ? 'active' : ''}`}
          onClick={() => handleStepClick(step)}
        >
          <div className="content">
            <h3>{careerStages[index]}</h3>
            <p>{step}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerProgress;
