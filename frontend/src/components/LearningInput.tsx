import React from 'react';

const LearningInput: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Get started with your learning"
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        marginBottom: '20px',
      }}
    />
  );
};

export default LearningInput;
