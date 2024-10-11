// App.tsx
import React from 'react';
import Sidebar from "./components/bing's components/Sidebar";
import Dashboard from "./components/bing's components/Dashboard";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default App;
