import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../App.css"

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
      {applications.length > 0 && ( // Only show table if data is available
      <>
       
        <h2>Rejected Applications</h2>
        <table border="0.75" styel={{width:"500%",height:"100%"}}>
          <thead >
            <tr >
              <th >Unique ID</th>
              <th>Name</th>
              <th>Approval Score</th>
              
            </tr>
          </thead>
          <tbody >
          
            {applications.map((item, index) => (
              <tr key={item.id}  style={{ cursor: "pointer",backgroundColor:"rgb(248, 251, 234)" }}>
                <td >{item.id}</td>
                <td>{item.name}</td>
                <td>
  <span 
    style={{ 
      display: "inline-block", 
      width: "50px", 
      height: "40px", 
      lineHeight: "30px", 
      borderRadius: "50%", 
      backgroundColor: "green", 
      color: "white", 
      textAlign: "center", 
      fontSize: "12px", 
      fontWeight: "bold" 
    }}
  >
    {item.approvalScore.toFixed(2)}
  </span>
</td>

               
                <button 
  style={{ width: "65%", padding: "6px", background: "red", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }} 
  onClick={() => handleRowClick(item.id)}
>
  Get Details
</button>

                
              </tr>
            ))}
          </tbody>
        </table>
        </>)}
    </div>
  );
}
