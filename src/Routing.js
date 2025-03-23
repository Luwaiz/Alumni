import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alumni from "./pages/Alumni";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Navbar from "./components/NavBar";
import ProtectedRoute from "./ProtectedRoute"; // Import the ProtectedRoute component
import Feed from "./pages/MyMemories";
import CreatePost from "./pages/CreatePost";

function Routing() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />

				{/* Protected Routes */}
				<Route element={<ProtectedRoute />}>
					<Route path="/my-memories" element={<Feed />} />
					<Route path="/alumni" element={<Alumni />} />
					<Route path="/my-profile" element={<Profile />} />
					<Route path="/create-post" element={<CreatePost />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default Routing;
