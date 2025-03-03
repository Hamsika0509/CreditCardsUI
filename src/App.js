import Login from './components/Login'
import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import Mainpage from './components/Mainpage';
import Header from './components/Header';
import Submittedpage from './components/Submittedpage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
      } from 'react-router-dom';
import Register from "./components/Register"; 
import Decisionpage from './components/Decisionpage';
import CheckRejectionReason from './components/CheckRejectionReason';
import Footer from './components/Footer';
import Home from "./components/Home";
import UploadForm from './components/uploadCSV';
import Approval from './components/Approval';
import Rejection from './components/Rejection';


function App() {
	return (
    <>

		<Router>
        <Routes>
		  <Route path="/" element={<Login />} />		
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Header" element={<Header />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Approval" element={<Approval/>}/>
          <Route path="/Rejection" element={<Rejection/>}/>
		      <Route path="/Mainpage" element={<Mainpage />} />
          <Route path="/uploadFrom" element={<UploadForm/>}/>
          <Route path="/Decisionpage" element={<Decisionpage />} />
          <Route path="/Submittedpage" element={<Submittedpage />} />
          <Route path="/CheckRejectionReason" element={<CheckRejectionReason />} />
          <Route path="/Che" element={<Home />} />
          
        </Routes>
      </Router>
      
		</>
	)
}

export default App;

