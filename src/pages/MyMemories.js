import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Mymemories.css";

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.get(
					"https://alumni-backend-6fcj.onrender.com/api/posts/feed"
				);
				console.log(response.data);
				// Add an `isLiked` property to each post (default to false)
				const postsWithLikes = response.data.map((post) => ({
					...post,
					isLiked: false, // Initialize isLiked as false
				}));
				setPosts(postsWithLikes);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching posts:", error);
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	const handleLike = async (postId) => {
		try {
			const response = await axios.post(
				`https://alumni-backend-6fcj.onrender.com/api/posts/like/${postId}`
			);
			// Update the post's likes and set isLiked to true
			const updatedPosts = posts.map((post) =>
				post._id === postId
					? { ...post, likes: response.data.likes, isLiked: true }
					: post
			);
			setPosts(updatedPosts);
		} catch (error) {
			console.error("Error liking post:", error);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<div className="cont">
			<div className="heading">
				<h1>My Profile</h1>
			</div>
			{posts.map((post) => (
				<div key={post._id} className="post-card">
					<p className="username">{post.ownerName}</p>
					<img
						src={`https://alumni-backend-6fcj.onrender.com${post.imageUrl}`}
						alt="Post"
						style={{ width: "100%", maxWidth: "500px" }}
					/>
					<div className="bottom">
						<button
							onClick={() => handleLike(post._id)}
							style={{
								background: "none",
								border: "none",
								cursor: "pointer",
								fontSize: "40px",
								marginTop: "-20px",
								marginLeft: "-40px",
								color: "#692800",
								fontWeight: "bold",
							}}
						>
							{post.isLiked ? "❤" : "🤍"}{" "}
							{/* Filled heart if liked, empty heart if not */}
						</button>
						<p>Likes: {post.likes}</p>
					</div>
				</div>
			))}
			{/* Floating Plus Button */}
			<button
				className="floating-button"
				onClick={() => navigate("/create-post")}
			>
				+
			</button>
		</div>
	);
};

export default Feed;
