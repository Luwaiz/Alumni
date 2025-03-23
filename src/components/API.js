const prod = true;

const url = prod ? "https://alumni-backend-6fcj.onrender.com/api/auth" : "http://localhost:5000/auth";

// Assign the object to a named variable
const apiEndpoints = {
  signup: `${url}/signup`,
  login: `${url}/login`,
  alumni: `${url}/alumni`,
  profile: `${url}/getProfile`,
  memories: `${url}/memories`,
  addMemory: `${url}/memories`,
};

// Export the named variable as the default export
export default apiEndpoints;