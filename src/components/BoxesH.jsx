import React from "react";
import PeatSize from './PeatSize';


 const BoxesH = (props) => {
    return (
        <div className="boxesH">
            {props.name.map((key) => 
                <div className="boxesH-paint" key={key.name}>
                    <p className="boxes-name">{key.name}</p>
                    <h6 className="boxes-name">Фракция:</h6>
                    <div className="select-css-margin-H">
                        <PeatSize/>
                    </div>
                    <h6 className="boxes-name">Объемный вес торфа:</h6>
                    <input className="inputBox" type="text" />
                </div>
            )}
       </div>
    );
};

export default BoxesH;