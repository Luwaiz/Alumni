import React from "react";
import "./alumni.css";

const Alumni = () => {
  // Example data for alumni profiles
  const alumniData = [
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Derek Hale",
      matric: "21/1333",
      social: "@itsderik",
      phone: "08096421154",
      department: "Software Engineering",
      lecturer: "Dr. Ajayi Wunmi",
      quote: "When life gives you lemons, stone life with it.",
      bestFriend: "Ogunbiyi James (Jaymie)",
      bestMoment: "Now (Final defense)",
      whatWillMiss: "Chapel Seminar",
    },
    {
      image: "https://via.placeholder.com/150", // Replace with actual image URL
      name: "Not-Derek Hale",
      matric: "21/1133",
      social: "@itsnotderik",
      phone: "080965910154",
      department: "Software Engineering",
      lecturer: "Dr. Ajayi Wunmi",
      quote: "The future belongs to those who believe in their dreams.",
      bestFriend: "John Doe",
      bestMoment: "Graduation Ceremony",
      whatWillMiss: "Campus Vibes",
    },
  ];

  return (
    <div className="container">

      {/* Alumni Profiles */}
      <div className="profiles">
        {alumniData.map((alumni, index) => (
          <div key={index} className="profile-card">
            <img src={alumni.image} alt={alumni.name} className="profile-pic" />
            <div className="profile-info">
              <p><strong>{alumni.name}</strong></p>
              <p>{alumni.matric}</p>
              <p>{alumni.social}</p>
              <p>{alumni.phone}</p>
              <p>{alumni.department}</p>
              <p><strong>Best Lecturer:</strong> {alumni.lecturer}</p>
              <p><strong>Best Quote:</strong> {alumni.quote}</p>
              <p><strong>Best Friend:</strong> {alumni.bestFriend}</p>
              <p><strong>Best Moment:</strong> {alumni.bestMoment}</p>
              <p><strong>What Will You Miss:</strong> {alumni.whatWillMiss}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
