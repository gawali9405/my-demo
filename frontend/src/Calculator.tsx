import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<number >(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<string | number | null>(null);

  const handleOperation = (operation: string) => {
    switch (operation) {
      case "add":
        setResult(num1 + num2);
        break;
      case "subtract":
        setResult(num1 - num2);
        break;
      case "multiply":
        setResult(num1 * num2);
        break;
      case "divide":
        setResult(num2 !== 0 ? num1 / num2 : "Cannot divide by zero");
        break;
      case "modulus":
        setResult(num2 !== 0 ? num1 % num2 : "Cannot find modulus with zero");
        break;
      default:
        setResult("Please give a valid input");
    }
  };

  return (
    <div style={{margin:"10px"}}>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        placeholder="Enter first number"
        onChange={(e) => setNum1(Number(e.target.value))}
        style={{border:'1px solid black'}}
      />
      <br />
      <br />
      <input
        type="number"
        value={num2}
        placeholder="Enter second number"
        onChange={(e) => setNum2(Number(e.target.value))}
        style={{border:'1px solid black'}}
      />
      <br />
      <br />
      <div style={{display:"flex", gap:"20px"}}>
        <button onClick={() => handleOperation("add")}>+</button>
        <button onClick={() => handleOperation("subtract")}>-</button>
        <button onClick={() => handleOperation("multiply")}>*</button>
        <button onClick={() => handleOperation("divide")}>/</button>
        <button onClick={() => handleOperation("modulus")}>%</button>
      </div>
      <br />
      <h1>Result: {result}</h1>
    </div>
  );
};

export default Calculator;
