import express from "express"

const app = express();
  
app.use(express.json());
 
app.get("/", (req, res) => {
  res.send("Server is running");
});
 
app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    case "modulus":
      result = num2 !== 0 ? num1 % num2 : "Cannot find modulus with zero";
      break;
    default:
      return res.status(400).json({ error: "Invalid operation" });
  }

  res.json({ result });
});
 
app.listen(4000, () => {
  console.log("Server is running");
});
