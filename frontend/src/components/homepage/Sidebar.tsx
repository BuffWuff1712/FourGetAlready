// Sidebar.tsx
import React from 'react';
import GrayTab from './GrayTab';
import '../../assets/styles/Sidebar.css'

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><GrayTab title="Dashboard"/></li>
        <li><GrayTab title="Courses"/></li>
        <li><GrayTab title="Settings"/></li>
      </ul>
    </div>
  );
};

export default Sidebar;
