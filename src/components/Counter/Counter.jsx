import React, { useContext } from "react";
import { CounterContext } from "../../App";

const Counter = () => {
  const counterValue = useContext(CounterContext);

  return (
    <>
      <h3>useReducer</h3>
      <p>Conteggio: {counterValue.state.count}</p>
      <button
        onClick={() => counterValue.dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
      <button
        onClick={() => counterValue.dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <button
        onClick={() => counterValue.dispatch({ type: "RESET" })}
      >
        Reset
      </button>
      <button
        onClick={() => counterValue.dispatch({ type: "RANDOM" })}
      >
        Random
      </button>
    </>
  );
};

export default Counter;
