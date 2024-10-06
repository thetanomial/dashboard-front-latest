import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFound.css'; // Optional: Add CSS for styling

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoToDashboard = () => {
    navigate('/dashboard'); // Redirects to the dashboard route
  };

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleGoToDashboard}>Go to Dashboard</button>
    </div>
  );
};

export default NotFound;
