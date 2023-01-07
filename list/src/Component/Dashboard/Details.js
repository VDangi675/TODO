import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Dashboard/Details.css"


export default function Details({ data, setData }) {

    const [activity, setActivity] = useState()
    const [status, setStatus] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        if(!data.email) return 
        fetch("/list", {
            method: "POST",
            Headers: {
                "authorization": "Bearer" + localStorage.getItem("jwt")
            }, body: JSON.stringify({
                data
            })
        }).then(res => res.json()).then(data => {
            if (data.e) {
                alert(data.e)
            } else {
                alert(data.message)
                navigate("/Dashboard")
                setData({})
            }
        })
    }, [data])



    const SetDetails = (e) => {
        e.preventDefault();
        setData({
            ...data,
            activity,
            status
        })
        navigate("/Dashboard")
    }

    return (


        <>
            <div className="dt-1">
                <h3>Activity</h3>
                <input type="text" name="activity" value={activity} onChange={(e) => setActivity(e.target.value)} />
                <h3>Status</h3>
                <input type="text" name="status" value={status} onChange={(e) => setStatus(e.target.value)} />
                <div>
                    <button id="b" onClick={(e) => SetDetails(e)}>Add</button>
                </div>

            </div>
        </>
    )
}