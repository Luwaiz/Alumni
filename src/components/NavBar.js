import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/my-memories" style={styles.link}>My Memories</Link></li>
        <li><Link to="/alumni" style={styles.link}>Alumni</Link></li>
        <li><Link to="/my-profile" style={styles.link}>My Profile</Link></li>
        <li><Link to="/signup" style={styles.link}>Sign Up</Link></li>
        <li><Link to="/login" style={styles.link}>Log in</Link></li>

      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
      display: "flex",
      justifyContent: "center", // Center items
    },
    navList: {
    borderBottom: "1px solid #D0B6A7", // Bottom border only
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "100px", // Equal spacing between items
    padding: "10px 100px",
    width:"80%",
},
  link: {
    textDecoration: "none",
    fontSize: "18px",
    color: "#692800", // Black text
    fontWeight:"500",
  },
};

export default Navbar;
