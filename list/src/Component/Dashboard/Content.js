import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "../Dashboard/Content.css"


export default function Content(){

    const [details,setDetails] = useState([])
    useEffect(()=>{
        fetch("/getlist",{
            method:"GET",
            Headers:{
                "authorization":"Bearer" + localStorage.getItem("jwt")
            }
        }).then(res=>res.json()).then(data=>{
            setDetails(data)
        })
    },[details])


    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.email)
    const username = user.email.split("@")[0]

    const navigate = useNavigate()


const Logout=(e)=>{
    console.log("logout")
    localStorage.clear()
    navigate("/")
}


    return (
        <>
        <div>
        <div className="container-2">
            <div className="box-11">
             <h2>{username}</h2>
            </div>
            <div className="box-22">
                <section className="sidebar">
                <h1>TO do List</h1>
                <p>History</p>
                <button className="btn" onClick={(e)=>Logout(e)}>Logout</button>
                </section>
                <section className="middle">
<button className="btn-2" onClick={()=>navigate("/details")}>Add New Activity</button>
<div className="table">
    <table>
        <tr>
            <th>
                Activity
            </th>
            <th>
               Status
            </th>
            <th>
               Timetaken
               <h4>(Hrs:Min:Sec)</h4>
            </th>
            <th>
               Action
            </th>
        </tr>
    </table>
</div>
                </section>

            </div>
            </div>
      
        </div>
        </>
    )
}