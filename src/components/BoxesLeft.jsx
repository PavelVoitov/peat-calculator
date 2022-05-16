import React from "react";
import PeatSize from "./PeatSize";

const BoxesLeft = (props) => {
    return (
        <div className="boxesLeft">
            {props.name.map((key) => 
                <div className="boxesH-paint-left" key={key.name}>
                  <div className="intoleftboxes">
                        <p className="boxes-name-left-L">{key.name}</p>
                        <h6 className="boxes-name-left">Фракция:</h6>
                        <div className="width">
                            <PeatSize />
                        </div>
                        <h6 className="boxes-name-left">Объемный вес торфа:</h6>
                        <input className="inputBox-left" type="text" />
                  </div>  
                    
                </div>
            )}
       </div>
    )
};

export default BoxesLeft;