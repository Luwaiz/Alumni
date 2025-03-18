import React from "react";

const Home = () => {
	return (
		<div style={styles.Container}>
			<div style={styles.innerContainer}>
				<h1 style={styles.welcome}>Welcome to</h1>
				<p style={styles.final}>Final Year</p>
				<p style={styles.announce}>Announcements</p>
				<div style={styles.outerContainer}>
					<div style={styles.innContainer}>
						<p>
							Welcome to the Alumni Network, Class of [Year]! Your journey is
							just beginning, and we’re excited to see where it takes you. Stay
							connected and share your achievements with us,"Lorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
							ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
							voluptate velit esse cillum dolore eu fugiat nulla pariatur.
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
							officia deserunt mollit anim id est laborum."
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const styles = {
	Container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100vh",
	},
	innerContainer: {
		width: "70%",
		display: "flex",
		flexDirection: "column",
		padding: "20px",
		alignItems: "center",
		marginTop: "100px",
	},
	welcome: {
		fontSize: "20px",
		color: "#692800",
		lineHeight: "0px",
		alignSelf: "flex-start",
		marginLeft: "250px",
	},
	final: {
		fontSize: "100px",
		fontWeight: "Bold",
		color: "#692800",
		marginTop: "-10px",
		fontStyle: "italic",
	},
	announce: {
		fontSize: "20px",
		color: "#692800",
        marginTop: "-50px",
	},
	outerContainer: {
		width: "80%",
		overflow: "hidden",
		backgroundColor: "#F4D7B4C9",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
		padding: "50px",
		borderRadius: "20px",
	},
	innContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "column",
		padding: "20px",
		backgroundColor: "white",
		border: "1px solid #692800",
		alignItems: "center",
	},
};

export default Home;
