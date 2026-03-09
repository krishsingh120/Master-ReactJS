import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(2);

  const numChange = () => {
    console.log("Num value change");
  };

  useEffect(() => {
    console.log("UseEffect Running....");
    numChange();
  }, [num2]);

  return (
    <div>
      <h1>
        num1: {num}, num2: {num2}{" "}
      </h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click1
      </button>

      <button
        onClick={() => {
          setNum2(num2 + 2);
        }}
      >
        Click2
      </button>
    </div>
  );
};

export default App;
