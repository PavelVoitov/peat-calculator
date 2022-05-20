import React, { useState } from "react";
import Hoppers from './components/Hoppers';
import BoxesH from './components/BoxesH';
import { AllBoxesName, boxesNameH, boxesNameLeft, boxesNameRight } from "./reducers/boxesName.js";
import PeatSize from "./components/PeatSize";
import CalculateSupply from './CalculateSupply';
import Boxesleft from './components/BoxesLeft';
import BoxesRight from "./components/BoxesRight";



const App = (props) => {
  
  const [supply, setSupply] = useState(''); 

  const handleSubmitChange = (supply) => {
    setSupply(supply)
  }

  return (
      <>    
          {supply}
          <Hoppers name={AllBoxesName}/>
          <div className="supply"></div>
          <div className="h1ForChoiseToFormulа">
          <div className="generalChoisePeatSize">
              <h3>Выбрать необходимую фракцию торфа:</h3>
             <PeatSize />
            </div>  
          </div>
          <CalculateSupply onChange={handleSubmitChange}/>
          <div className="Boxes">
            <BoxesH name={boxesNameH}/>
            <Boxesleft name={boxesNameLeft}/>
            <BoxesRight name={boxesNameRight}/>
          </div>
      </>
  
  );  
};

export default App;
