import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css"

export default function Approval() {
  const [applications, setApplications] = useState([]);
  const [searchId, setSearchId] = useState(""); // State to store input value
  const [triggerSearch, setTriggerSearch] = useState(false); // State to trigger useEffect

  
  const handleSearch = () => {
    if(searchId.trim() !== ""){
      axios.post(`http://127.0.0.1:8000/getApprovedData`,{"idCount":searchId})
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); }
      else{
        alert(`Enter the no of applications you need`);
      }
    };

  return (
    <div>
      <h5>Enter no of Applications required</h5>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input 
      style={{width:"40%",padding:"7px",marginBottom:"5px"}}
        type="number" 
        value={searchId} 
        onChange={(e) => setSearchId(e.target.value)} 
        placeholder="Enter count" 
      />
      <button style={{width:"40%",padding:"7px",marginBottom:"5px"}}onClick={handleSearch}>Get Applications</button>
      <a style={{textDecoration:"None",color: "#007bf"}} href="/Homepage">
      Go Back
    </a>
      </div>

      {applications.length > 0 && ( // Only show table if data is available
      <>
        <h2>Approved Applications</h2>
        <table border="1">
          <thead style={{backgroundColor:"red",color:"#ffffff"}}>
            <tr>
              <th>Unique ID</th>
              <th>Age</th>
              <th>Marital Status</th>
              <th>Annual Income</th>
              <th>Credit Score</th>
              <th>Approval Status</th>
            </tr>
          </thead>
          <tbody style={{ cursor: "pointer",backgroundColor:"rgb(248, 251, 234)" }}>
            {applications.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.age.toFixed(1)}</td>
                <td>{item.maritalStatus}</td>
                <td>${item.annualIncome.toLocaleString()}</td>
                <td>{item.creditScore}</td>
                <td>{item.predictedApprovalStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </>)}
    </div>
  );
}