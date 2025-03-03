import React, { useState } from "react";
import "../App.css"; // Import CSS file
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState("");

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    console.log(formData.firstName)
    axios.post("http://localhost:5000/api/register", {
      "firstName": formData.firstName,
      "lastName": formData.lastName,
      "id":formData.id,
      "dob": formData.dob,
      "address": formData.address,
      "email": formData.email,
      "ssn": formData.ssn,
      "phoneNumber": formData.phoneNumber,
      "employmentStatus": formData.employmentStatus,
      "maritalStatus": formData.maritalStatus,
      "dependents": formData.dependents

  }, {
    headers: {
        "Content-Type": "application/json"  // Ensure JSON format
    }})
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error)); 
    window.location.replace('Submittedpage')
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">User Information</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            required
            value={formData.firstName}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            required
            value={formData.lastName}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="id"
            placeholder="ID"
            required
            value={formData.id}
            onChange={handleChange}
            className="input"
          />
          <input
            type="date"
            name="dob"
            required
            value={formData.dob}
            onChange={handleChange}
            className="input"
          />
          
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            className="input"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="ssn"
            required
            placeholder="SSN (9 digits)"
            value={formData.ssn}
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="phoneNumber"
            required
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input"
          />
          <select
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="">Select Employment Status</option>
            <option value="Employed">Employed</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Retired">Retired</option>
          </select>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
          <input
            type="number"
            name="dependents"
            placeholder="No of Dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
