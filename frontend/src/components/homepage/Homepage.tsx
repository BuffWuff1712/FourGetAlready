import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../../assets/styles/Homepage.css';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Homepage: React.FC = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <Dashboard />

      {/* Button to navigate to UserProfileForm */}
      <Link to="/user-profile" className="profile-button">
        Go to User Profile
      </Link>
    </div>
  );
};

export default Homepage;
