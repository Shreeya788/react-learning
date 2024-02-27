import "./App.css";
import "./components/style.css";
import {
  PropsDrilling,
  Header,
  Wrapper,
  Button,
} from "./components/PropsDrilling";

import React, { useState } from "react";

function App() {
  // const [word, setWord] = React.useState("Eat");
  // function CLickHandler (){
  //   setWord("Drink");
  // }
  return (
    <div>
      {/* <StateExample message= {word + " your lemon "} /> */}
      {/* <button onClick={CLickHandler}> */}
      {/* Click Me! */}
      {/* </button> */}
      <PropsDrilling msg="I passed through the Header and the Wrapper and I reached the Button component" />
    </div>
  );
}

export default App; // Export the App component once
