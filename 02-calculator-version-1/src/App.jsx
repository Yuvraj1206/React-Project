import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      let res = eval(calVal);
      if (!Number.isInteger(res)) {
        res = res.toFixed(4);
      }
      setCalVal(res);
    } else {
      setCalVal(calVal + buttonName);
    }
  };

  return (
    <center>
      <div className="CalContainer">
        <Display calVal={calVal}></Display>
        <Buttons handleClick={handleClick}></Buttons>
      </div>
    </center>
  );
}

export default App;
