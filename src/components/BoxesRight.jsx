import React from "react";
import PeatSize from "./PeatSize";

const BoxesRight = (props) => {
    return (
        <div className="boxesRight">
            {props.name.map((key) => 
                <div className="boxesH-paint-right" key={key.name}>
                  <div className="intoRightBoxes">
                        <p className="boxes-name-right-R">{key.name}</p>
                            <h6 className="boxes-name-right-F">Фракция:</h6>
                                <div className="width-right">
                                    <PeatSize />
                                </div>
                            <h6 className="boxes-name-right">Объемный вес торфа:</h6>
                        <input className="inputBox-right" type="text" />
                  </div>  
                    
                </div>
            )}
       </div>
    )
};

export default BoxesRight;