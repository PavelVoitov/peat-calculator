import React, { useState } from "react";
import Supply from "./Supply";


const CalculateSupply = () => {
        const [b1value, setB1value] = useState('');
        const [b2value, setB2value] = useState('');
        const [b3value, setB3value] = useState('');
        const [b4value, setB4value] = useState('');
        const [bSumValue, setBSumValue] = useState('');
        const [maxSupplly, setMaxSupplly] = useState('');
        const [SupplyArray, setSupplyArray] = useState('');
        
       
    
    
    const handleChange1 = (e) => {
        setB1value(() => (e.target.value));
    };
    const handleChange2 = (e) => {
        setB2value(() => (e.target.value));
    };
    const handleChange3 = (e) => {
        setB3value(() => (e.target.value));
    };
    const handleChange4 = (e) => {
        setB4value(() => (e.target.value));
    };
    const handleChange5 = (e) => {
        setBSumValue(() => (e.target.value));
    };
    const handleChange6 = (e) => {
        setMaxSupplly(() => (e.target.value));
    };

    const handleSubmit = (event) => {
        let B1 = b1value;
        let B2 = b2value;
        let B3 = b3value;
        let B4 = b4value;
        let bSum = bSumValue;
        let partPeatB1 = Math.abs(bSum - B2);
        let partPeatB2 = Math.abs(bSum - B1);
        let partPeatB3 = Math.abs(bSum - B4);
        let partPeatB4 = Math.abs(bSum - B3);
        let RmaxSupplly = +(maxSupplly) + 10;
        let m1Part = RmaxSupplly/(partPeatB1 + partPeatB2 + partPeatB3 + partPeatB4);
        let B1Suplly = partPeatB1 * m1Part;
        let B2Suplly = partPeatB2 * m1Part;
        let B3Suplly = partPeatB3 * m1Part;
        let B4Suplly = (partPeatB4 * m1Part) - 10;
        let Supply = [Math.round(B1Suplly), Math.round(B2Suplly), Math.round(B3Suplly), Math.round(B4Suplly)]
        alert(`Введите следующие значения подачи: ${Supply}`);
        
        let SupplyArray = [
                          {supply: Math.round(B1Suplly)},
                          {supply: Math.round(B2Suplly)},
                          {supply: Math.round(B3Suplly)},
                          {supply: Math.round(B4Suplly)}
                          ];
    

       

        event.preventDefault();
        return SupplyArray;

    };

    console.log(SupplyArray);

  
  
    return (
    <div className="main">
      <form className="form" onSubmit={handleSubmit}>
      <div className="field">      
        <label>
          Объемный вес торфа в Бункере 1:
        </label>
          <input type="text" value={b1value} onChange={handleChange1} />
      </div>
      <div className="field">
        <label>
          Объемный вес торфа в Бункере 2:
        </label>
          <input type="text" value={b2value} onChange={handleChange2} />
      </div>
      <div className="field">
        <label>
          Объемный вес торфа в Бункере 3:
        </label>
          <input type="text" value={b3value} onChange={handleChange3} />
      </div>
      <div className="field">    
        <label>
          Объемный вес торфа в Бункере 4:
        </label>
          <input type="text" value={b4value} onChange={handleChange4} />
      </div>
      <div className="field">    
        <label>
          Требуемый объемный вес торфа:
        </label>
          <input type="text" value={bSumValue} onChange={handleChange5} />
      </div>
      <div className="field">  
        <label>
          Макс. подача (куб.м):
        </label>
          <input type="text" value={maxSupplly} onChange={handleChange6} />
      </div>
      <div className="field">
            <input className="btn" type="submit" value="Расчитать подачу торфа" />
      </div>      
      </form>
      <Supply value={SupplyArray} onChange={() => setSupplyArray(handleSubmit)}/>
    </div> 
      )
};

export default CalculateSupply;