import React, { useState, useEffect } from "react";
import { redirect, useLocation } from "react-router-dom";
export default function CheckRejectionReason  () {
  const location = useLocation();
  const responseData=location.state?.data; 
  const data=responseData.User;
  const response=responseData.response;
  
     
  const userData={
  "Id": data.id,
  "Name": data.name,
  "Age": parseInt(data.age, 10),
  "Marital Status": data.maritalStatus,
  "Dependents": data.dependents,
  "Employment Status": data.employmentStatus,
  "Days at Current Job": parseInt(data.daysAtCurrentJob, 10),
  "Annual Income": parseInt(data.annualIncome, 10),
  "Payment History": data.paymentHistory.toFixed(3),
  "Delinquencies": data.delinquencies,
  "Credit Score": data.creditScore.toFixed(3),
  "Credit History Length": data.creditHistoryLength.toFixed(3),
  "Existing Credit Limit": data.existingCreditLimit.toFixed(3),
  "Existing Credit Usage": data.existingCreditUsage.toFixed(2),
  "Debt to Income Ratio": data.debtToIncomeRatio.toFixed(6),
  "Num of Inquiries": parseInt(data.numOfInquiries,10),
  "US Citizen Address Verified": data.usCitizenAddressNotVerified ? "NO":"YES",
  "Employment Verified": data.employmentNotVerified ? "NO":"YES",
  "Income Verified": data.incomeNotVerified ? "NO":"YES",
  "Email Verified": data.emailNotVerified ? "NO":"YES",
  "SSN Verified": data.ssnNotVerified ? "NO":"YES",
  "Residential Address Verified": data.residentialAddressNotVerified? "NO":"YES",
  "DOB Verified": data.dobNotVerified ? "NO":"YES",
  "Phone Number Verified": data.phoneNumberNotVerified ? "NO":"YES",
  "Duplicate Application": data.duplicateApplication ? "NO":"YES",
  "Illogical Name Found": data.illogicalNameFound ?  "NO":"YES",
  "Credit Application Complete": data.creditApplicationNotComplete ? "NO":"YES",
  "Predicted Approval Status": data.predictedApprovalStatus,
  "Approval Score": data.approvalScore.toFixed(4)
  
  }
  const groupedFields = {
    "Personal Details": ["Name","Id", "Age", "Marital Status", "Dependents", "Employment Status", "Days at Current Job", "Annual Income"],
    "Credit History": ["Payment History", "Delinquencies", "Credit Score", "Credit History Length", "Existing Credit Limit", "Existing Credit Usage", "Debt to Income Ratio", "Num of Inquiries"],
    "Verification Checks": ["US Citizen Address Verified", "Employment Verified", "Income Verified", "Email Verified", "SSN Verified", "Residential Address Verified", "DOB Verified", "Phone Number Verified"],
    "Approval Details": ["Duplicate Application", "Illogical Name Found", "Credit Application Complete", "Predicted Approval Status", "Approval Score"]
  };
  
   const data1=response.replace(/\*/g,"");

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
       
        {Object.keys(groupedFields).map((category) => (
          <div key={category} className="table-container">
            <h3 className="table-title">{category}</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Field</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {groupedFields[category].map((field) => (
                  <tr key={field}>
                    <td className="field-name">{field}</td>
                    <td>{userData[field]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
            </>
     
      <h2>Credit Application Decision</h2>
      <div style={{justifyContent:"center",backgroundColor:"rgb(245, 250, 223)"}}>
      {formatText(data1)}
      </div>
      <a style={{textDecoration: "none", color: "blue",marginRight:"90%" }} href="/Homepage">Go Back </a>
    </div>
  );
};


