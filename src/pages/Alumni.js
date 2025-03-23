import React, { useEffect, useState } from "react";
import axios from "axios";
import "./alumni.css";

const Alumni = () => {
	const [alumni, setAlumni] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Fetch all alumni data
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
				console.log("Backend Response:", response.data); // Log the response
				setAlumni(response.data); // Set the alumni data
				setLoading(false);
			} catch (error) {
				console.error("Error fetching alumni:", error);
				setError("Failed to fetch alumni. Please try again.");
				setLoading(false);
			}
		};

		fetchAlumni();
	}, []);

	// Display loading state
	if (loading) {
		return <div className="container">Loading...</div>;
	}

	// Display error state
	if (error) {
		return <div className="container">{error}</div>;
	}

	// Display alumni data
  console.log("alumnisss",alumni)
	return (
		<div className="container">
			<div className="heading">
				<h1>All Alumni</h1>
			</div>

			<div className="all">
				<div className="input-container">
					<div className="input-main">Alumni List</div>

					{/* Display alumni data */}
					{alumni.map((alumnus) => (
						<div key={alumnus?._id} className="alumnus-card">
							<div className="input-group1">
								<div className="input-box">Name: {alumnus.name}</div>
								<div className="input-box">Matric No: {alumnus.matricNo}</div>
							</div>

							<div className="input-group2">
								<div className="input-box">Course: {alumnus.courseStudy}</div>
								<div className="input-box">
									Best Lecturer: {alumnus.bestLecturer}
								</div>
							</div>

							<div className="input-group3">
								<div className="input-box">
									Best Friend: {alumnus.bestFriend}
								</div>
								<div className="input-box">
									Best Moment: {alumnus.bestMoment}
								</div>
							</div>

							<div className="inputs">
								<div className="input-box">
									Social Handler: {alumnus.socialHandler}
								</div>
								<div className="input-box">Phone No: {alumnus.phoneNo}</div>
								<div className="input-box">Best Quote: {alumnus.bestQuote}</div>
								<div className="input-box">What I'll Miss: {alumnus.miss}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Alumni;
