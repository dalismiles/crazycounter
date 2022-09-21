import React, { useContext } from "react";
import { CounterContext } from "../../App";

import "./index.css";

const Counter = () => {
  const counterValue = useContext(CounterContext);

  return (
    <div className="Counter">
      
      <div className="buttons">
        <button
          onClick={() => counterValue.dispatch({ type: "RANDOM" })}
          className="mainbutton"
        >
          Get Your Answer Now
        </button>
        <button
          onClick={() => counterValue.dispatch({ type: "RESET" })}
          className="resetbutton"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
