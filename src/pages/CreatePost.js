import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const token = localStorage.getItem("token"); // Retrieve the token
      const response = await axios.post("https://alumni-backend-6fcj.onrender.com/api/posts/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Include the token in the header
        },
      });
      console.log("Post created:", response.data);
      setLoading(false);
      navigate("/my-memories"); // Redirect to the feed after posting
    } catch (error) {
      console.error("Error creating post:", error);
      setError(error.response ? error.response.data.message : error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      {error && <p style={{ color: "red" }}></p>}
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;