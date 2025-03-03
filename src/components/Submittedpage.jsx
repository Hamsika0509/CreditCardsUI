// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "../App.css"; // Import CSS file

// const Success = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="container">
//       <div className="card">
//         <h2 className="success-message">✅ Application Submitted Successfully!</h2>
//         <button onClick={() => navigate("/Homepage")} className="button">
//           Go Back to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Success;


import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
   

    try {
      const response = await axios.post("http://localhost:5001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage("Error uploading file!");
    }
  };

  return (
    <div>
      <h2>Upload CSV File</h2>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UploadForm;
