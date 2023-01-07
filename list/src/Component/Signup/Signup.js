import React, { useState } from "react"
import "../Signup/Signup.css"
import { Link, useNavigate } from "react-router-dom"

export default function Signup(){


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setconfirmPassword] = useState("")
    const navigate = useNavigate()


    const SignUpHandler = (e) => {
        e.preventDefault()
        console.log(email, password, confirmPassword)
        fetch("/signUp", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, confirmpassword: confirmPassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    navigate("/")
                }
            })
    }



    return (
        <>
        <div className="container-1">
            <div className="box">
          
              <div className="box-1">
              <img  id="img-1" src={require("../../images/register.png")}/>
                <h1>Register</h1>
                <div className="data">
                    <input className="input-1" type="text" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input  className="input-1" type="password" placeholder="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <input  className="input-1" type="password" placeholder="confirmpassword" name="confirmpassword" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
                </div>
                <div className="but">
                    <button className="button" onClick={(e)=>SignUpHandler(e)}>Register</button>
                </div>
               <Link to="/" ><h2>Member login</h2></Link>
              </div>
            </div>
            </div>
        </>
    )
}