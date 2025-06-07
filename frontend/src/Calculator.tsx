import { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value: string) => {
    if (value === "=") {
      const result = Function('"use strict";return (' + input + ")")();
      setInput(result.toString());
    } else if (value === "⌫") {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === "C") {
      setInput("");
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "⌫"
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input className="display" type="text" value={input} readOnly />
        <div className="buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              onClick={() => handleClick(btn)}
              className={btn === "=" ? "equal" : btn === "C" ? "clear" : ""}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
