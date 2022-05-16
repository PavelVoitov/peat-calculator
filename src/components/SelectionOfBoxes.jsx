import React from "react";
//дать имя каждому боксу
//привязать имя к option




const SelectionOfBoxes = (props) => {
        return (
            <select className="select-css">
                 {props.name.map((key) => <option key={key.name}>{key.name}</option>)}
            </select>
        );
};


export default SelectionOfBoxes;