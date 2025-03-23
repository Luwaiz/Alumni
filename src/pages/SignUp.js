import React from "react";
import './SignUp.css'

const SignupForm = () => {
  return (
    <div className="container">
      <div className="form-box">
        <h2>Create an Account</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Matric Number" />
          <input type="text" placeholder="Social Media Handle" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Course Of Study" />
          <input type="text" placeholder="Best Lecturer" />
          <input type="text" placeholder="Best Quote" />
          <input type="text" placeholder="Best Friend" />
          <input type="text" placeholder="Best Moment" />
          <textarea placeholder="What Will You Miss"></textarea>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
