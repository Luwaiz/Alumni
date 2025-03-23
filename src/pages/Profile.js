import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import apiEndpoints from "../components/API";

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Retrieve matricNo from localStorage
  const matricNo = localStorage.getItem("matricNo");
  // Fetch user profile data
  useEffect(() => {
    
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${apiEndpoints.profile}/${matricNo}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token for authentication
          },
        });
        setUser(response.data); // Set the user data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching user profile:", error.response);
        setError("Failed to fetch user profile. Please try again."); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchUserProfile();
  }, [matricNo]);

  // Display loading state
  if (loading) {
    return <div className="container">Loading...</div>;
  }

  // Display error state
  if (error) {
    return <div className="container">{error}</div>;
  }

  // Display user profile data
  return (
    <div className="container">
      <div className="heading">
        <h1>My Profile</h1>
      </div>

      <div className="all">
        <div className="input-container">
          <div className="input-main">
            Best-Friend
            {/* Main Input (if needed, otherwise remove) */}
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