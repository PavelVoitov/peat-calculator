import React from "react";
import SelectionOfBoxes from './SelectionOfBoxes';
import '../index.css';
// import Supply from "../Supply";

const Hoppers = (props) => {

    if (!props.value) {
        return (
            <>
                <div className="hopper">
                    {}
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
    } else {
        const SupplyArray = props.value;
        console.log(SupplyArray);
        const SupplyNumbers = SupplyArray.map(key => Object.values(key));
        return (
            <>
                <div className="hopper">
                    <div className="supply">{SupplyNumbers[0]} куб/м</div>
                    <div className="hopper-paint">
                        <p className="hopper-name">Бункер 1 <br />Номер бокса:</p>
                        <div className="select-css-margin-auto">
                            <SelectionOfBoxes name={props.name}/>
                        </div>
                    </div>
                </div>
                <div className="hopper">
                <div className="supply">{SupplyNumbers[1]} куб/м</div>
                    <div className="hopper-paint">
                        <p className="hopper-name">Бункер 2 <br />Номер бокса:</p>
                        <div className="select-css-margin-auto">
                            <SelectionOfBoxes name={props.name}/>
                        </div>
                    </div>
                </div>
                <div className="hopper">
                <div className="supply">{SupplyNumbers[2]} куб/м</div>
                <div className="hopper-paint">
                        <p className="hopper-name">Бункер 3 <br />Номер бокса:</p>
                        <div className="select-css-margin-auto">
                            <SelectionOfBoxes name={props.name}/>
                        </div>
                    </div>
                </div>
                <div className="hopper">
                <div className="supply">{SupplyNumbers[3]} куб/м</div>
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
    
};

export default Hoppers;