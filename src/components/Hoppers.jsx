import React from "react";
import SelectionOfBoxes from './SelectionOfBoxes';
import '../index.css';

const Hoppers = (props) => {

    
    return (
        <>
            <div className="hopper">
                <div className="hopper-paint">
                    <p className="hopper-name">Бункер 1 <br />Номер бокса:</p>
                    <div className="select-css-margin-auto">
                        <SelectionOfBoxes name={props.name}/>
                    </div>
            </div>
            </div>
            <div className="hopper">
                <div className="hopper-paint">
                    <p className="hopper-name">Бункер 2 <br />Номер бокса:</p>
                    <div className="select-css-margin-auto">
                        <SelectionOfBoxes name={props.name}/>
                    </div>
                </div>
            </div>
            <div className="hopper">
            <div className="hopper-paint">
                    <p className="hopper-name">Бункер 3 <br />Номер бокса:</p>
                    <div className="select-css-margin-auto">
                        <SelectionOfBoxes name={props.name}/>
                    </div>
                </div>
            </div>
            <div className="hopper">
            <div className="hopper-paint">
                    <p className="hopper-name">Бункер 4 <br />Номер бокса:</p>
                    <div className="select-css-margin-auto">
                        <SelectionOfBoxes name={props.name}/>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Hoppers;