import { useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import InputContainer from "./components/InputContainer";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState("");

  return (
    <>
      <InputContainer
        setNum1={setNum1}
        num1={num1}
        setNum2={setNum2}
        num2={num2}
      />

      <ButtonContainer setResult={setResult} num1={num1} num2={num2} />

      <p>Result {result}</p>
    </>
  );
}

export default App;
