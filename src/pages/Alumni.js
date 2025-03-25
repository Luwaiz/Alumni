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
		<div>
			{alumni?.map((alumnus) => (
				<div className="container">
					<div className="all">
						<div className="input-container">
							<div className="input-main">
								{alumnus.profilePicture && (
									<img
										src={`https://alumni-backend-6fcj.onrender.com${alumnus.profilePicture}`}
										alt="Profile"
										className="profile-image"
										onError={(e) => {
											e.target.src = "https://via.placeholder.com/150"; // Fallback image
										}}
									/>
								)}
							</div>

							<div className="input-group1">
								<div className="input-box">
									Best Friend: {alumnus.bestFriend}
								</div>
								<div className="input-box">
									Best Moment: {alumnus.bestMoment}
								</div>
							</div>

							<div className="input-group2">
								<div className="input-box">
									Best Lecturer: {alumnus.bestLecturer}
								</div>
								<div className="input-box">Best Quote: {alumnus.bestQuote}</div>
							</div>

							<div className="input-group3">
								<div className="input-box">
									Course Study: {alumnus.courseStudy}
								</div>
								<div className="input-box">
									Social handle: {alumnus.socialHandler}
								</div>
							</div>

							<div className="inputs">
								<div className="input-box">Name: {alumnus.name}</div>
								<div className="input-box">
									Matric Number: {alumnus.matricNo}
								</div>
								<div className="input-box">Phone Number: {alumnus.phoneNo}</div>
								<div className="input-box">
									What will You miss: {alumnus.miss}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Alumni;
