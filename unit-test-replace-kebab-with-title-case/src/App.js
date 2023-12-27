import { useState } from "react";
import "./App.css";
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const nextColor =
    buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const handleClick = () => {
    setButtonColor(nextColor);
  };

  const handleCheck = () => {
    setButtonDisabled((prev) => !prev);
  };
  return (
    <div className="App">
      <button
        className={!buttonDisabled ? buttonColor : "disabled"}
        disabled={buttonDisabled}
        onClick={handleClick}
      >
        change to {kebabCaseToTitleCase(nextColor)}
      </button>
      <div>
        <input
          type="checkbox"
          id="disable-button"
          onChange={handleCheck}
        ></input>
        <label htmlFor="disable-button">disable button</label>
      </div>
    </div>
  );
}

export default App;
