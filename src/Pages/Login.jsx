
import React from "react";
import './Login.css';
export default function Login(){
    const logValid=()=>{
           let log=document.getElementById("email1") 
           let log1=document.getElementById("pass1")
           if((log.value)===window.localStorage.getItem("email")&&(log1.value)===window.localStorage.getItem("password"))
            {
           window.open("./")
        }else{
            alert("enter valid details")
        }
    }
    return(
        <>
        <div class="box"> 
        <h1 id="lform">Login Form</h1>
       <div className="login">
    
    <label htmlFor="">Email</label>
    <input type="text" id='email1'/><br></br>
    <label htmlFor="">Password</label>
    <input type="password" maxLength={6} id='pass1'/><br></br>
    <button onClick={logValid}>Login</button>
       </div>
       </div>
        </>
    )
}
