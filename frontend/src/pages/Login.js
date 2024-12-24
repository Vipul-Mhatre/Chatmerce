import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("Login successful (replace this with API call)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;