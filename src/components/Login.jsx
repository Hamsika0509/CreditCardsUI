import React, { useState } from "react";
import "./Login.css"; // Import CSS
import axios from "axios";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !password) {
      setError("Both fields are required!");
      return;
    }
    setError("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/login",
        { userId, password },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
        window.location.replace("/Homepage"); // Redirect on success
      } else {
        setError("Invalid Credentials!");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Invalid credentials!");
    }
  };

  return (
    <div>
      <div className="card" style={{height:"100%",display:"block"}}>
        <h2 className="title">Login as Underwriter</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="input"
          />
          <input
            type="password"
            placeholder="Password"
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
