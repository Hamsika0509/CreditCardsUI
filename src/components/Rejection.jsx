import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css"
import "./Rejection.css";

export default function Rejection() {
  const [applications, setApplications] = useState([]);
  const [searchCount,setSearchCount] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(false); // State to store input value
  const navigate = useNavigate();
  
  const handleSearch = () => {
    if(searchCount.trim() !== ""){
      axios.post(`http://127.0.0.1:8000/getRejectedData`,{"idCount":searchCount})
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); }
      else{
        alert(`Enter the count`);
      }
    };
    const navigateToNextPage = (data) => {
      // Use the navigate function to go to the next page
      navigate('/CheckRejectionReason', { state: { data} });
    };
    const handleRowClick=async(id)=>{
        setLoading(true);
        setMessage("");
        try {
          const response = await axios.post("http://127.0.0.1:8000/getDecision", {
            "id": id,
          }, {
            headers: {
              "Content-Type": "application/json"  // Ensure JSON format
            }
          });
          setLoading(false);
          navigateToNextPage(response.data);
          
        } catch (error) {
          console.error("Request failed:", error.response?.data || error.message);
          setMessage(error.response?.data?.message || "An error occurred.");
        }

      };
    
  return (
    <div>
       {loading ? (          
           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100px" }}>
           <div className="loader"></div>
           <strong style={{ color: "green", marginTop: "10px" }}>Loading...</strong>
         </div>         
        ) :(<><h5>Enter no of Applications required</h5>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <input 
          style={{width:"50%",padding:"7px",marginBottom:"5px"}}
            type="number" 
            value={searchCount} 
            onChange={(e) => setSearchCount(e.target.value)} 
            placeholder="Enter count" 
          />
          <button style={{width:"57%",padding:"7px",marginBottom:"5px"}}onClick={handleSearch}>Get Applications</button>
          <a style={{textDecoration:"None",color: "#007bf"}} href="/Homepage" >
          Go Back
        </a>
          </div>
          </>
      )}
    
      
           {applications.map((item) => (
            <div className="card-wrapper" key={item.id}>
      <div className="card">
        <div className="card-content">
                <div className="text-section">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-subtitle">ID: {item.id}</p>
                </div>
                <div className="score-badge" style={{ 
                      display: "inline-block", 
                      width: "60px", 
                      height: "60px", 
                      lineHeight: "30px", 
                      borderRadius: "50%", 
                      backgroundColor: "blue", 
                      color: "white",
                      marginLeft:"50px", 
                      textAlign: "center", 
                      fontSize: "12px", 
                      fontWeight: "bold" 
                    }}>{item.approvalScore.toFixed(2)}</div>
        </div>
        </div>
        <button className="details-button" onClick={() => handleRowClick(item.id)}>
        Get Details
      </button>
          
          </div>
            ))}
       
    </div>
  );
}
