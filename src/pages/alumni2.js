// // import React from 'react';
// // import "./alumni1.css";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

// // const alumni1 = () => {
// //   return (
// //       <div>
// //           <FontAwesomeIcon icon={faSquarePlus} color="#692800" size='2x' className='icon1'/>
// //       </div>
// //   );
// // };

// // export default alumni1;

// import React, { useState } from "react";
// import axios from "axios";

// const CreatePost = () => {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     formData.append("image", image);
//     formData.append("ownerName", "John Doe"); // Replace with actual user name
//     formData.append("ownerId", "12345"); // Replace with actual user ID

//     try {
//       const response = await axios.post("https://alumni-backend-6fcj.onrender.com/api/posts/create", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log("Post created:", response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error creating post:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Create a Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
//         <button type="submit" disabled={loading}>
//           {loading ? "Uploading..." : "Post"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;
