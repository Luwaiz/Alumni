import React from 'react';
import "./profile.css";

const Profile = () => {
  return (
    <div className="container">
      <div className="heading">
      </div>

      <div className="all">
        <div className="input-container">
          <div className="input-main">
            Best-Friend
            {/* Main Input (if needed, otherwise remove) */}
          </div>

          <div className="input-group1">
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
          </div>

          <div className="input-group2">
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
          </div>

          <div className="input-group3">
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
          </div>

          <div className="inputs">
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
            <div className="input-box">Best Friend</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
