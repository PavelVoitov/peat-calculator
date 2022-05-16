import React, { useState} from "react";
import App from "./App";


export const userDetailContext = React.createContext(null);

const ProviderApp = () => {
    const [variantPeatSize] = useState([
        {size: '0-5'},
        {size: '5-10'},
        {size: '0-10'},
        {size: '10-20'},
        {size: '0-20'},
        {size: '20-40'},
    ])
    return (
        <userDetailContext.Provider value={variantPeatSize}>
            <App />
        </userDetailContext.Provider>
    
    );
};

export default ProviderApp;