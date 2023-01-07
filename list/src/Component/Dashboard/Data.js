import React from "react";

export default function Data({list}){
    return (
        <>
        <div className="data">
            <table>
                <tr>
{list.Activity}
                </tr>
                </table>
        </div>
        </>
    )
}