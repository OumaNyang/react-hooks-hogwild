import React from "react";

function Sort({settingSort}){
    return(
        <div id="sort" onChange={settingSort}>
            <select>
                <option value ="Sort by">Sort by</option>
                <option value ="Name">Name</option>
                <option value ="weight">Weight</option>
            </select>
        </div>
    )
}

export default Sort