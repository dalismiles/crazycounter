import React, { createContext, useReducer } from "react";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

import "./App.css";

const initialState = {
  count: 0,
  userName: "",
};

export const CounterContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "RANDOM":
      return { ...state, count: Math.floor(Math.random() * 1000) };
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CounterContext.Provider value={({ state, dispatch })}>
        <Navbar />
        <div className="counters">
          <Counter />
          <hr />
          <input
            type="text"
            value={state.userName}
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            placeholder="Put a name..."
          />
        </div>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
