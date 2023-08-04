import React, { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(null);
  const [numberPeople, setNumberPeople] = useState(1);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);

  function calculateTip(num) {
    setTipAmount((bill * (num / 100)) / numberPeople);
    console.log(bill, num, numberPeople, tipAmount);

    setTotalPerson((bill + tipAmount) / numberPeople);
  }

  function inputBill(e) {
    setBill(parseInt(e.target.value));
  }

  function inputPeople(e) {
    setNumberPeople(parseInt(e.target.value));
  }
  function reset() {
    setTipAmount(0);
    setTotalPerson(0);
  }

  return (
    <div className="contenedor">
      <div className="div-1">
        <div className="bill1">
          Bill
          <input
            type="number"
            placeholder="Total"
            className="input-bill"
            onChange={inputBill}
            value={bill}
          />
        </div>
        <div className="select">
          Select Tip %
          <div>
            <button onClick={() => calculateTip(5)}>5%</button>
            <button onClick={() => calculateTip(10)}>10%</button>
            <button onClick={() => calculateTip(15)}>15%</button>
          </div>
          <div>
            <button onClick={() => calculateTip(25)}>25%</button>
            <button onClick={() => calculateTip(50)}>50%</button>
          </div>
        </div>
        <div className="number">
          Number of People
          <input
            type="number"
            placeholder="number"
            className="input-numberpeople"
            value={numberPeople}
            min="1"
            max="100"
            onChange={inputPeople}
          />
        </div>
      </div>
      <div className="div-2">
        <div className="tip">
          <span>Tip Amount / person</span>
          <span>{tipAmount}</span>
        </div>
        <div className="total">
          <span>Total / person</span>
          <span>{totalPerson}</span>
        </div>
        <div className="reset">
          <button onClick={reset} id="button-reset">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
