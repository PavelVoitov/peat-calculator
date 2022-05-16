import React from "react";
import Hoppers from './components/Hoppers';
import BoxesH from './components/BoxesH';
import { AllBoxesName, boxesNameH, boxesNameLeft, boxesNameRight } from "./reducers/boxesName.js";
import PeatSize from "./components/PeatSize";
import CalculateSupply from './CalculateSupply';
import Boxesleft from './components/BoxesLeft';
import BoxesRight from "./components/BoxesRight";



const App = (props) => {
  
  return (
      <>      
          <Hoppers name={AllBoxesName}/>
          <div className="supply"></div>
          <div className="h1ForChoiseToFormulа">
          <div className="generalChoisePeatSize">
              <h3>Выбрать необходимую фракцию торфа:</h3>
             <PeatSize />
            </div>  
          </div>
          <CalculateSupply />
          <div className="Boxes">
            <BoxesH name={boxesNameH}/>
            <Boxesleft name={boxesNameLeft}/>
            <BoxesRight name={boxesNameRight}/>
          </div>
      </>
  
  );  
};

export default App;
