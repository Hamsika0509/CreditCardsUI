import React from "react";
import "./Header.css"; // Import the CSS file

const data = {
  id: "12345",
  Name: "John Doe",
  Age: 32,
  "Marital Status": "Single",
  Dependents: 2,
  "Employment Status": "Full-Time",
  "Days at Current Job": 1025,
  "Annual Income": "$75,000",
  "Payment History": "Good",
  Delinquencies: 0,
  "Credit Score": 750,
  "Credit History Length": "5 years",
  "Existing Credit Limit": "$20,000",
  "Existing Credit Usage": "30%",
  "Debt to Income Ratio": "25%",
  "Num of Inquiries": 2,
  "US Citizen Address Not Verified": "No",
  "Employment Not Verified": "Yes",
  "Income Not Verified": "No",
  "Email Not Verified": "Yes",
  "SSN Not Verified": "No",
  "Residential Address Not Verified": "Yes",
  "DOB Not Verified": "No",
  "Phone Number Not Verified": "No",
  "Duplicate Application": "No",
  "Illogical Name Found": "No",
  "Credit Application Not Complete": "No",
  "Approval Status": "Rejected",
  "Predicted Approval Status": "Pending",
  "Predicted Approval Status Probs": "60%",
  "Approval Score": 72.5
};

const groupedFields = {
  "Personal Details": ["Name","id", "Age", "Marital Status", "Dependents", "Employment Status", "Days at Current Job", "Annual Income"],
  "Credit History": ["Payment History", "Delinquencies", "Credit Score", "Credit History Length", "Existing Credit Limit", "Existing Credit Usage", "Debt to Income Ratio", "Num of Inquiries"],
  "Verification Checks": ["US Citizen Address Verified", "Employment Verified", "Income Verified", "Email Verified", "SSN Verified", "Residential Address Verified", "DOB Verified", "Phone Number Verified"],
  "Approval Details": ["Duplicate Application", "Illogical Name Found", "Credit Application Not Complete", "Predicted Approval Status", "Approval Score"]
};

export default function Header() {
  return (<>
    <h2 className="title">Application Details</h2>
    <div className="container">
     

      <div className="tables-wrapper">
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
                    <td>{data[field]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
