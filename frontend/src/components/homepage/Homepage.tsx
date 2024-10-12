import React from 'react';
import '../../assets/styles/Homepage.css'
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';


const Homepage: React.FC = () => {

  return (
    <div className="homepage">
      <Sidebar/>
      <Dashboard/>
    </div>
  );
};

export default Homepage;
