import React from 'react';
import './Login.css';

const LogIn = () => {
  return (
    <div className="container">
     <h1>Final Year</h1> 

      <div className="sec">
        <input type="text" placeholder="Matric Number" />
        <input type="password" placeholder="*************" />

        <div className="button-group">
          <button className="login">Log in</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn; 
