import React, { createContext, useReducer } from "react";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";

import Wizard from "./images/wizard.gif";

import "./App.css";

const initialState = {
  count: "",
  question: "",
};

export const CounterContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET":
      return { ...state, count: 0 };
    case "RANDOM":
      return { ...state, count: Math.floor(Math.random() * 100) };
    case "SET_QUESTION":
      return { ...state, question: action.payload };
    default:
      return state || "";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <CounterContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <div className="counter">
          <hr />
          <div>
            <p className="description">
              Are you curious about something in your past?
            </p>
            <p className="description">
              Do you wanna know how your future will be?
            </p>
            <p className="mainDescription">
              Ask your question to Ugo,
              <br /> the crazy seer!
            </p>
          </div>
          <hr />
          <p className="egQuestion">
            e.g. does he love me? will I be rich? did she cheated on me?
          </p>
          <input
            type="text"
            value={state.question}
            onChange={(e) =>
              dispatch({ type: "SET_QUESTION", payload: e.target.value })
            }
            placeholder="Your Question here..."
          />
          <Counter />
        </div>
        <div className="image">
          <img src={Wizard} alt="wizard-gif" />
          <a
            href="https://www.behance.net/gallery/30490291/Wizard-Sticker-Set-for-Dropbox-Paper"
            target="_blank"
          >
            gif credits to: MarkusMagnusson{" "}
          </a>
        </div>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
