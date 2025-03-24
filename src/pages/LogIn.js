import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import "./Login.css";
import apiEndpoints from "../components/API";

const LogIn = () => {
	const navigate = useNavigate(); // Initialize useNavigate

	// State to manage form inputs
	const [formData, setFormData] = useState({
		matricNo: "",
		password: "",
	});

	// Handle input changes
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const location = useLocation();
	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Check if any field is empty
		if (!formData.matricNo || !formData.password) {
			alert("Matric number and password are required.");
			return;
		}

		try {
			// Send login request to the backend API
			const response = await axios.post(apiEndpoints.login, formData);
			console.log("Login successful:", response.data);

			// Save the token in localStorage
			if (response.data.token) {
				// Save the token and matricNo in localStorage
				localStorage.setItem("token", response.data.token);
				localStorage.setItem("matricNo", response.data.user.matricNo);
				console.log("Token saved:", response.data.token);
			} else {
				console.error("Token not found in response.");
				alert("Login failed. Please try again.");
				return;
			}

			// Redirect to the home page or another protected route
			const from = location.state?.from?.pathname || "/my-profile";
			navigate(from, { replace: true });
		} catch (error) {
			console.error(
				"Login error:",
				error.response ? error.response.data : error.message
			);
			alert("Invalid matric number or password. Please try again.");
		}
	};

	return (
		<div className="container">
			<h1>Final Year</h1>

			<div className="sec">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						name="matricNo"
						placeholder="Matric Number"
						value={formData.matricNo}
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						placeholder="*"
						value={formData.password}
						onChange={handleChange}
					/>

					<div className="button-group">
						<button type="submit" className="login">
							Log in
						</button>
						<button
							type="button"
							className="signup"
							onClick={() => navigate("/signup")} // Redirect to the signup page
						>
							Sign Up
						</button>
					</div>
				</form>
			</div>
		</div>
	);

};

export default LogIn;
