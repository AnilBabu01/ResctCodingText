import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Counter = () => {
  const navigate = useNavigate();
  const [countervalue, setcountervalue] = useState(1);

  const increaseCouter = () => {
    setcountervalue(countervalue + 1);
  };

  const decreaseCouter = () => {
    if (countervalue > 0) {
      setcountervalue(countervalue - 1);
    }
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
          <div>
            <button className="btnhome" onClick={increaseCouter}>
              {" "}
              Increase Counter value
            </button>
            <p>{countervalue}</p>
            <button className="btnhome" onClick={decreaseCouter}>
              {" "}
              DecreaseCounter value
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
