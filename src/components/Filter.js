import React from "react";

function Filter({ selectingGrease }) {
    
    return (
        <form id="selctionDiv">
            <select id="selct" onChange={selectingGrease}>
                <option value="all">All</option>
                <option value="true">Greased</option>
                <option value="false">Not Greased</option>
            </select>
        </form>
    )
}
export default Filter