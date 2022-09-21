import React, { useContext } from "react";
import { CounterContext } from "../../App";

import "./index.css";

const Counter = () => {
  const counterValue = useContext(CounterContext);

  return (
    <div className="Counter">
      <p className="result">{counterValue.state.count}%</p>
      <div className="buttons">
        <button
          onClick={() => counterValue.dispatch({ type: "RESET" })}
          className="resetbutton"
        >
          Reset
        </button>
        <button
          onClick={() => counterValue.dispatch({ type: "RANDOM" })}
          className="mainbutton"
        >
          Alakazam!
        </button>
      </div>
    </div>
  );
};

export default Counter;
