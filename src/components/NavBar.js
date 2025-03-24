import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();
	const isLoggedIn = localStorage.getItem("token");

	const handleLogout = () => {
		// Clear the token and any other user data
		localStorage.removeItem("token");
		localStorage.removeItem("matricNo");

		// Redirect to login page
		navigate("/login");

		// Optional: Refresh the page to reset the app state
		window.location.reload();
	};

	return (
		<nav style={styles.navbar}>
			<ul style={styles.navList}>
				<h1 style={styles.logo}>Final Year</h1>
				<li>
					<Link to="/" style={styles.link}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/my-memories" style={styles.link}>
						My Memories
					</Link>
				</li>
				<li>
					<Link to="/alumni" style={styles.link}>
						Alumni
					</Link>
				</li>
				<li>
					<Link to="/my-profile" style={styles.link}>
						My Profile
					</Link>
				</li>

				{/* Conditionally render Sign Up/Login or Logout */}
				{!isLoggedIn ? (
					<>
						<li>
							<Link to="/signup" style={styles.link}>
								Sign Up
							</Link>
						</li>
						<li>
							<Link to="/login" style={styles.link}>
								Log in
							</Link>
						</li>
					</>
				) : (
					<li style={styles.logoutLi}>
						<button onClick={handleLogout} style={styles.logoutButton}>
							Logout
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

const styles = {
	navbar: {
		display: "flex",
		justifyContent: "center",
	},
	navList: {
		borderBottom: "1px solid #D0B6A7",
		listStyle: "none",
		display: "flex",
		justifyContent: "center",
		gap: "90px",
		padding: "10px 100px",
		width: "80%",
		alignItems: "center", // Align items vertically
	},
	link: {
		textDecoration: "none",
		fontSize: "18px",
		color: "#692800",
		fontWeight: "500",
	},
	logoutLi: {
		marginLeft: "auto", // Push logout to far right
	},
	logoutButton: {
		background: "none",
		border: "none",
		color: "#692800",
		fontSize: "18px",
		fontWeight: "500",
		cursor: "pointer",
		padding: 0,
		textDecoration: "none",
		fontFamily: "inherit",
	},
  logo: {
    fontSize: "24px",
    color: "#692800",
    fontWeight: "bold",
    // textTransform: "uppercase",
  },
};

export default Navbar;
