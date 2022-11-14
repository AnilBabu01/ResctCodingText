import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SumOfTwoNo() {
  const navigate = useNavigate();
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(0);

  const addition = () => {
    let result = parseInt(number1) + parseInt(number2);
    setTotal(result);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <button className="btnhome" onClick={() => navigate("/")}>
            Go backe to home
          </button>
          <h2>Adding Two Numbers</h2>
          <input
            placeholder="First Number"
            type="number"
            name="number1"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <input
            placeholder="Second Number"
            name="number2"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
            type="number"
          />

          <button className="btnhome" onClick={addition}>
            Add Two Numbers
          </button>
          <p>Total:{total}</p>
        </div>
      </div>
    </>
  );
}

export default SumOfTwoNo;
