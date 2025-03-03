import React, { useState, useEffect } from "react";
import { redirect, useLocation } from "react-router-dom";
export default function CheckRejectionReason  () {
  const location = useLocation();
  const responseData=location.state?.data; 
  const item=responseData.User;
  const response=responseData.response;
  
  // const task1Heading = response.replace(/\*\*/g, "");
  console.log(typeof user)
   const data=response.replace(/\*/g,"");

  const formatText = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.startsWith("Task")) {
        return <p style={{fontSize:"20px",fontWeight:"bold"}} key={index} className="mt-4 font-bold">{line.replace(/\*/g, "")}</p>;
      } else if (/^\d+\./.test(line)) {
        return <p style={{fontSize:"15px",textAlign:"left"}} key={index} className="ml-4 mt-1">🔹 { line.replace(/\*\*(.*?)\*\*/g, "$1")}</p>;
      } else if (line.startsWith("**")) {
        return <p style={{fontSize:"25px",color:"Blue"}} key={index} className="ml-4 mt-1 font-bold">{line.replace(/\*\*/g, "")}</p>;
      } else {
        return <p key={index} style={{textAlign:"left",paddingLeft:"25px"}} className="ml-4">{line}</p>;
      }
    });
  };
  
  // Function to format the response
  
  return (
    <div clasName="card" style={{justifyContent:"center"}}>   
    
      <>
        <h2>Rejected Application Data</h2>
        <table border="0.75">
          <thead>
            <tr style={{backgroundColor:"red",color:"white",opacity:"80%"}}>
              <th>Unique ID</th>
              <th>Age</th>
              <th>Marital Status</th>
              <th>Annual Income</th>
              <th>Credit Score</th>
              <th>Existing Credit Limit</th>
              <th>Existing Credit Usage</th>
              <th>Debt to Income Ratio</th>
              <th>Approval Status</th>
              <th>Approval Score</th>
            </tr>
          </thead>
          <tbody >
           
              <tr key={item.id} style={{ cursor: "pointer",backgroundColor:"rgb(245, 250, 223)" }}>
                <td>{item.id}</td>
                <td>{item.age.toFixed(1)}</td>
                <td>{item.maritalStatus}</td>
                <td>${item.annualIncome.toLocaleString()}</td>
                <td>{item.creditScore}</td>
                <td>{item.existingCreditLimit}</td>
                <td>{item.existingCreditUsage}</td>
                <td>{item.debtToIncomeRatio}</td>
                <td>{item.approvalStatus}</td>
                <td>{item.approvalScore}</td>
                {/* <td>{item.</td> */}
              </tr>
            
            </tbody>
            </table>
            </>
     
      <h2>Credit Application Decision</h2>
      <div style={{justifyContent:"center",backgroundColor:"rgb(245, 250, 223)"}}>
      {formatText(data)}
      </div>
      <a style={{textDecoration: "none", color: "blue",marginRight:"90%" }} href="/Homepage">Go Back </a>
    </div>
  );
};

// Example Usage with API Data
