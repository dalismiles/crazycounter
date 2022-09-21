import React, { createContext, useReducer } from "react";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

import Wizard from "./images/wizard.gif";

import "./App.css";

const initialState = {
  count: "",
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
      return { ...state, count: Math.floor(Math.random() * 100) };
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
      <CounterContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <div className="counter">
          <Counter />

          <hr />
          <div>
            <p className="description">Are you curious about your past?</p>
            <p className="description">
              Do you wanna know how your future will be?
            </p>
            <p className="mainDescription">
              Ask your question to Ugo,
              <br /> the crazy seer!
            </p>
          </div>
          <input
            type="text"
            value={state.userName}
            onChange={(e) =>
              dispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            placeholder="Your Question here..."
          />
          <hr />
          <p className="egQuestion">
            e.g. does he love me? will I be happy? did she cheated on me?
          </p>
        </div>
        <div className="image">
          <img src={Wizard} alt="wizard-gif" />
        </div>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
