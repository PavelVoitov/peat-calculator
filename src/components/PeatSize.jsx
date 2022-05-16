import React, { useContext } from "react";
import { userDetailContext } from "../ProviderApp";

const PeatSize = () => {
    const size = useContext(userDetailContext);
    return (
             <select className="select-css">
                    {size.map((key) => <option key={key.size}>{key.size}</option>)}
            </select>    
    );
};

export default PeatSize;