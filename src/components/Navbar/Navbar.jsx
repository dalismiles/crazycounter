import React, { useContext } from "react";
import { CounterContext } from "../../App";

const Navbar = () => {
    const userValue = useContext(CounterContext);
  
    return (
      <div className="Navbar">
        <h2>Username: {userValue.state.userName}</h2>
      </div>
    );
  };

  export default Navbar;