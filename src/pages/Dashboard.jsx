import React from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css'; // Adding a separate CSS file for dashboard-specific styles

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <div className="dashboard-widgets">
        <NavLink 
          to="/dashboard/accounting" 
          className={({ isActive }) => (isActive ? 'active widget-box' : 'widget-box')}
        >
          <h3>Accounting</h3>
          <p>Manage your finances and accounting here.</p>
        </NavLink>
        <NavLink 
          to="/dashboard/human-resources" 
          className={({ isActive }) => (isActive ? 'active widget-box' : 'widget-box')}
        >
          <h3>Human Resources</h3>
          <p>View and manage employee data and HR tasks.</p>
        </NavLink>
        <NavLink 
          to="/dashboard/legal" 
          className={({ isActive }) => (isActive ? 'active widget-box' : 'widget-box')}
        >
          <h3>Legal</h3>
          <p>Access legal documents and manage compliance.</p>
        </NavLink>
        <NavLink 
          to="/dashboard/social-media" 
          className={({ isActive }) => (isActive ? 'active widget-box' : 'widget-box')}
        >
          <h3>Social Media</h3>
          <p>Monitor and manage your social media presence.</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Dashboard;
