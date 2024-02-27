import "./App.css";
import "./components/style.css";
import StateExample  from "./components/StateExample";
import React, {useState} from "react";

function App() {
  const [word, setWord] = React.useState("Eat");
  function CLickHandler (){
    setWord("Drink");
  }
  return (
    <div>
    <StateExample message= {word + " your lemon "} />
    <button onClick={CLickHandler}>
      Click Me!
    </button>
    </div>
  );
}

export default App; // Export the App component once
