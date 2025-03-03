import React, { useState, useEffect } from "react";
import "../App.css"; // Import CSS file
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Decision = () => {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [shapValues, setShapValues] = useState([]);
  const [columnValues, setColumnValues] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate for React Router v6

 
  const navigateToNextPage = (shapValues) => {
    // Use the navigate function to go to the next page
    navigate('/CheckRejectionReason', { state: { shapValues} });
  };

  const handleDecision = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!userId) {
      setMessage("Id required!");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/getDecision", {
        "id": userId,
      }, {
        headers: {
          "Content-Type": "application/json"  // Ensure JSON format
        }
      });
      navigateToNextPage(response.data.SHAP_Values);
      
    } catch (error) {
      console.error("Request failed:", error.response?.data || error.message);
      setMessage(error.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Automatic Credit card Decisioner</h2>
        {message && <p className="success">{message}</p>}
        <input
          type="text"
          placeholder="Enter your ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="input"
        />
        <button onClick={handleDecision} className="button">
          Get Risk Decision
        </button>
        <div style={{height:"5px"}}>
      </div>
      <a style={{textDecoration: "none", color: "blue",marginRight:"80%" }} href="/Homepage">Go Back </a>
      </div>
    </div>
  );
};

export default Decision;
