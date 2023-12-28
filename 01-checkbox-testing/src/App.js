import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const nextColor = buttonColor === "red" ? "blue" : "red";
  const handleClick = () => {
    setButtonColor(nextColor);
  };

  const handleCheck = () => {
    setButtonDisabled((prev) => !prev);
  };
  return (
    <div className="App">
      <button
        className={buttonColor}
        disabled={buttonDisabled}
        onClick={handleClick}
      >
        change to {nextColor}
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
