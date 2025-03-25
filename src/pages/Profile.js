import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import apiEndpoints from "../components/API";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const matricNo = localStorage.getItem("matricNo");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${apiEndpoints.profile}/${matricNo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error.response);
        setError("Failed to fetch user profile. Please try again.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [matricNo]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="container">
      <div>
        <p className="pro">My Profile</p>
      </div>

      <div className="all">
        <div className="input-container">
          <div className="input-main">
            {user.profilePicture && (
              <img 
                src={`https://alumni-backend-6fcj.onrender.com${user.profilePicture}`} 
                alt="Profile" 
                className="profile-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150"; // Fallback image
                }}
              />
            )}
          </div>

          <div className="input-group1">
            <div className="input-box">Best Friend: {user.bestFriend}</div>
            <div className="input-box">Best Moment: {user.bestMoment}</div>
          </div>

          <div className="input-group2">
            <div className="input-box">Best Lecturer: {user.bestLecturer}</div>
            <div className="input-box">Best Quote: {user.bestQuote}</div>
          </div>

          <div className="input-group3">
            <div className="input-box">Course Study: {user.courseStudy}</div>
            <div className="input-box">Social handle: {user.socialHandler}</div>
          </div>

          <div className="inputs">
            <div className="input-box">Name: {user.name}</div>
            <div className="input-box">Matric Number: {user.matricNo}</div>
            <div className="input-box">Phone Number: {user.phoneNo}</div>
            <div className="input-box">What will You miss: {user.miss}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;