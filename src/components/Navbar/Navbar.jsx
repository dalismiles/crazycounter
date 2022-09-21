import React, { useContext } from "react";
import { CounterContext } from "../../App";

import "./index.css";

const Navbar = () => {
  const userValue = useContext(CounterContext);

  return (
    <div className="Navbar">
      <h2>{userValue.state.userName}</h2>
    </div>
  );
};

export default Navbar;
