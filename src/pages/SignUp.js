import React from 'react';
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="full">
        <p className="heading">Create an Account</p>

        <div className="inputs">
          <input type="text" placeholder="Name" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Matric Number" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Social Media Handle" />
        </div>

        <div className="inputs">
          <input type="number" placeholder="Phone Number" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Best Lecturer" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Best Quote" />
        </div>

        <div className="inputs">
          <input type="text" placeholder="Best Friend" />
        </div>

        <div className="inputs">
          <textarea placeholder="Best Moments"></textarea>
        </div>

        <div className="inputs">
          <textarea placeholder="What Will You Miss" className="sec"></textarea>
        </div>


      </div>
      <div>
          <button className="submit">Sign Up</button>
        </div>
    </div>
  );
};

export default SignUp;
