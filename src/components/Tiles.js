import React, { useState } from "react";

function Tile({src, alt, name, specialty, greased, weight, medal}){
    const[tileClick, setTileClick] = useState(false);

    function handleTileClick(){
        setTileClick((tileClick) => !tileClick)
    }

    return(
        <div className="ui eight wide column" onClick={handleTileClick}>
            <img id="image" src={src} alt={alt}/>
            <h3 className="header">{name}</h3><br/>
            {tileClick ?
                <div>
                    <p>{specialty}</p>
                    <p>{greased ? "Greased" : "Not greased"}</p>
                    <p>{weight}</p>
                    <p>{medal}</p>
                </div>
                : null}
            </div>
    )
}

export default Tile