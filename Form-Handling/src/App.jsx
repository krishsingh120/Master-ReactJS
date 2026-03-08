import React, { useState } from "react";

const App = () => {
  const [val, setVal] = useState("");

  const submitHandler = (e) => {
    console.log("Form handle");
    e.preventDefault();

    console.log(val);

    setVal("");
  };

  const inputHandler = (e) => {
    console.log("Input handle");
    setVal(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          value={val}
          onChange={(e) => inputHandler(e)}
          type="text"
          placeholder="Enter your name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
