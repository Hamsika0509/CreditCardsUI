import React from 'react';
import '../App.css';
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data,setData] = useState("");
  const {name,id,password,cpassword}=data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:[e.target.value]});
  }
  const submitHandler = e => {
        e.preventDefault();
        const id=data.id
       // localStorage.setItem(id, JSON.stringify(data));
    			if (String(data.cpassword) === String(data.password)) {
    				console.log(data.name + " You Are Successfully Registered");
            axios.post("http://localhost:5000/api/login", {
              "userId": data.userId,
              "password": data.password
          }, {
            headers: {
                "Content-Type": "application/json"  // Ensure JSON format
            }})
            .then(response => console.log(response.data))
            .catch(error => console.error("Error:", error)); 
          //  window.location.replace('/Mainpage');
    			} else {
    				console.log("Passwords are not matching");
           // window.location.replace('/Register');
    			}
    		
    	};
	return (
		<>
			<div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <p>Please enter your credentials to Register.</p>
          </div>
        </div>
        <form class="login-form" autocomplete="off" onSubmit={submitHandler}>
          <input type="text" required name="name" placeholder="User Name" value={name} onChange={changeHandler}/>
          <input type="text" required name="id" placeholder="User Id" value={id} onChange={changeHandler}/>
          <input type="password" name="password" placeholder="Password" value={password} onChange={changeHandler}/>
          <input type="password" name="cpassword" placeholder="Confirm Password" value={cpassword} onChange={changeHandler}/>
          <button>Register</button>
          <ul class='nav-list'>
          <li><a href='/Login'>Login?</a></li>
          <li><a href='/' >Cancel?</a></li>
          </ul>
        </form>
      </div>
    </div>		
			
   </>
	);
}



