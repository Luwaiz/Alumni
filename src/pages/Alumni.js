import React, { useEffect, useState } from "react";
import axios from "axios";
import "./alumni.css";

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const response = await axios.get(
          "https://alumni-backend-6fcj.onrender.com/api/auth/getAllUsers",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setAlumni(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching alumni:", error);
        setError("Failed to fetch alumni. Please try again.");
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  if (error) {
    return <div className="container">{error}</div>;
  }

  return (
    <div className="containerr">
      <div className="heading">
        <h1>All Alumni</h1>
      </div>

      <div className="alll">
        <div className="alumni-grid">
          {alumni.map((alumnus) => (
            <div key={alumnus._id} className="alumnus-card">
              <div className="card-content">
                <div className="profile-image-container">
                  <img
                    src={`https://alumni-backend-6fcj.onrender.com${alumnus.profilePicture}`}
                    alt="Profile"
                    className="profile-imagee"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                </div>
                
                <div className="alumnus-info">
                  <h3 className="alumnus-name">{alumnus.name}</h3>
                  <p className="alumnus-matric">{alumnus.matricNo}</p>
                  
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-label">Course:</span>
                      <span className="detail-value">{alumnus.courseStudy}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Best Lecturer:</span>
                      <span className="detail-value">{alumnus.bestLecturer}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Best Friend:</span>
                      <span className="detail-value">{alumnus.bestFriend}</span>
                    </div>
                    
                    <div className="detail-item">
                      <span className="detail-label">Social Handle:</span>
                      <span className="detail-value">{alumnus.socialHandler}</span>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;