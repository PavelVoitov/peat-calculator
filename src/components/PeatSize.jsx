import React, { useContext, useState } from "react";
import { userDetailContext } from "../ProviderApp";

const PeatSize = () => {
    const size = useContext(userDetailContext);
    const [value, setValue] = useState('');

    const ChangeSize = (e) => {
        setValue(e.target.value);
    };

    const selectPeatSize = size.map((key) => {return <option key={key.size}>{key.size}</option>});
    console.log(value);


    return (
             <select className="select-css" value={value} onChange={ChangeSize}>
                    {selectPeatSize}
            </select>    
    );
};

export default PeatSize;