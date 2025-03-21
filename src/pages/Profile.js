import React from 'react';
import "./profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="heading">
        <h1>My Profile</h1>
      </div>

      <div className="all">
        <div className="input-container">
          <input type="text" placeholder="Best Friend" className="input-main" />

          <div className="input-group">
            <input type="text" placeholder="Best Friend" />
            <input type="text" placeholder="Best Friend" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Best Friend" />
            <input type="text" placeholder="Best Friend" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Best Friend" />
            <input type="text" placeholder="Best Friend" />
          </div>

          <div className="input-group">
            <input type="text" placeholder="Best Friend" />
            <input type="text" placeholder="Best Friend" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
