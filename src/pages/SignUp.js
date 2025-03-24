import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './SignUp.css';
import apiEndpoints from "../components/API";

const SignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    password: "",
    matricNo: "",
    socialHandler: "",
    phoneNo: "",
    courseStudy: "",
    bestLecturer: "",
    bestQuote: "",
    bestFriend: "",
    bestMoment: "",
    miss: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any field is empty
    for (const key in formData) {
      if (key !== "profilePicture" && !formData[key]) {
        alert(`Please fill in the ${key} field.`);
        return;
      }
    }

    try {
      const data = new FormData();
      
      // Append all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null) {
          data.append(key, formData[key]);
        }
      });

      const response = await axios.post(apiEndpoints.signup, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log("Signup successful:", response.data);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response ? error.response.data : error.message);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form inputs remain the same */}
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="text" name="matricNo" placeholder="Matric Number" value={formData.matricNo} onChange={handleChange} />
          <input type="text" name="socialHandler" placeholder="Social Media Handle" value={formData.socialHandler} onChange={handleChange} />
          <input type="text" name="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} />
          <input type="text" name="courseStudy" placeholder="Course Of Study" value={formData.courseStudy} onChange={handleChange} />
          <input type="text" name="bestLecturer" placeholder="Best Lecturer" value={formData.bestLecturer} onChange={handleChange} />
          <input type="text" name="bestQuote" placeholder="Best Quote" value={formData.bestQuote} onChange={handleChange} />
          <input type="text" name="bestFriend" placeholder="Best Friend" value={formData.bestFriend} onChange={handleChange} />
          <input type="text" name="bestMoment" placeholder="Best Moment" value={formData.bestMoment} onChange={handleChange} />
          <textarea name="miss" placeholder="What Will You Miss" value={formData.miss} onChange={handleChange}></textarea>
          <input type="file" name="profilePicture" onChange={handleFileChange} accept="image/*" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;