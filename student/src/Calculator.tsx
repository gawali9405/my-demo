import { useState } from "react";
const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [reuslt, setResult] = useState<string | number | null>(null);

  const handleOperation = (operation: string) => {
    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      default:
        setResult("Please give the valid input");
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        placeholder="Enter the number"
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <br /> <br />
      <input
        type="number"
        value={num2}
        placeholder="Enter the number"
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br /> <br />
      <div>
        <button onClick={() => handleOperation("add")}>+</button>
      </div>
      <br />
      <h1> Result : {reuslt}</h1>
    </div>
  );
};

export default Calculator;
