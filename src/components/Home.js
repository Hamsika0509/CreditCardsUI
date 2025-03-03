import React, { useState } from "react";
import axios from "axios";
export default function Home() {
  const [msg, setMsg] = useState("");
 const submit = async(e) => {
    e.preventDefault();
    try {
        alert('data is submitted')
      await axios.post("http://localhost:8000/", {
        msg
      });
    } 
    catch (e) {
      console.log(e);
    }
  };


  return (
    <div className="cont">
      <form action="POST">
        <textarea
          name="text"
          onChange={(e) => {
            setMsg(e.target.value);
          }}
          placeholder="ebter the text"
          cols="14"
          rows="3"
        ></textarea>
        <input type="submit" onClick={submit} value="Submit" />
      </form>
    </div>
  );
}
