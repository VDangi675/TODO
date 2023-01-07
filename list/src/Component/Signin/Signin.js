import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../Signin/Signin.css"

export default function Signin(){


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate()


    const SigninHandler =(e)=>{
        e.preventDefault()
        console.log(email, password)
        fetch("/signIn", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    localStorage.setItem("jwt",data.token)
                    localStorage.setItem("user",JSON.stringify(data.user))
                    alert(data.message)
                    navigate("/Dashboard")
                }
            })
    }


    return (
        <>
        <div className="container-1">
            <div className="boxx">
          
              <div className="box-1">
              <img  id="img-1" src={require("../../images/logo.png")}/>
                <h1>Member Login</h1>
                <div className="data">
                <input className="input-1" type="text" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input  className="input-1" type="password" placeholder="password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                
                </div>
                <div className="but">
                    <button className="button" onClick={(e)=>SigninHandler(e)}>Login</button>
                </div>
                <h2>Forgot password</h2>
              </div>
            </div>
            </div>
        </>
    )
}