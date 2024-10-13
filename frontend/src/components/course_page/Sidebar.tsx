import React from 'react';
import '../../assets/styles/sidebar.css'

interface SidebarProps {
  onSelect: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelect }) => {
  return (
    <div className="sidebar">
      <h2>Course Navigation</h2>
      <button onClick={() => onSelect('overview')}>Overview</button>
      <button onClick={() => onSelect('syllabus')}>Syllabus</button>
      <button onClick={() => onSelect('resources')}>Resources</button>
      <button onClick={() => onSelect('contact')}>Contact Instructor</button>
    </div>
  );
};

export default Sidebar;