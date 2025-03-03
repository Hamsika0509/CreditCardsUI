import React, { useState,useEffect } from "react";
import "../App.css"; // Import the CSS file
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();   
    if (!userId || !password) {
      setError("Both fields are required!");
      return;
    }
    setError("");
    try {
      const response =  await axios.post("http://127.0.0.1:8000/login", {
        "userId": userId,
        "password": password
    }, {
      headers: {
          "Content-Type": "application/json"  // Ensure JSON format
      }});
      console.log(response);
      // If login is successful
      if (response.status === 200) {
        console.log("Login successful:", response.data);
         // Store token if using authentication
        window.location.replace("/Homepage"); // Redirect to dashboard page
      }
      else{
        console.log("Login unsuccessful:", response.data);
        setError("Invalid Credentials!");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid credentials!"); // Show error message
    } 
    
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login as Underwriter</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Enter your ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
