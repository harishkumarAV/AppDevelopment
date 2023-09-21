import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <h2></h2>
      <ul>
        <li><a href="#">Search Job</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Resume Builder</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
