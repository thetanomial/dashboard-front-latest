// src/components/ProfileCard.jsx
import React from 'react';
import './ProfileCard.css'; // Optional: Style your card

const ProfileCard = ({ name, email }) => {
  return (
    <div className="profile-card">
      <img src="https://randomuser.me/api/portraits/men/37.jpg" alt="Profile" className="profile-image" /> {/* Replace with actual path */}
      <h4>{name}</h4>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
