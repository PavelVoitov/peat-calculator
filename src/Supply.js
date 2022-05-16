import React from "react";

const Supply = (props) => {
    if (!props.value) {
        return null;
    }
    return (
        <div>{props.value.map((key) => <div>{key.supply}</div>)}</div>
       
    )
}

export default Supply;