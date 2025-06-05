import { useState } from "react";
import axios from "axios";

const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [resultData, setResultData] = useState<string | number | null>(null);

  const handleOperation = async (operation: string) => {
    try {
      const response = await axios.post("http://localhost:4000/calculate", {
        num1,
        num2,
        operation,
      });
      setResultData(response.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={num1}
        placeholder="Enter first number"
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <br />
      <br />
      <input
        type="number"
        value={num2}
        placeholder="Enter second number"
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <br />
      <br />
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => handleOperation("add")}>+</button>
        <button onClick={() => handleOperation("subtract")}>-</button>
        <button onClick={() => handleOperation("multiply")}>*</button>
        <button onClick={() => handleOperation("divide")}>/</button>
        <button onClick={() => handleOperation("modulus")}>%</button>
      </div>
      <br />
      <h1>Result: {resultData}</h1>
    </div>
  );
};

export default Calculator;
