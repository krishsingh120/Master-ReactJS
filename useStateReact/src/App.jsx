import React, { useState } from "react";

const App = () => {
  let counter = 0;
  const [val, setVal] = useState(counter); // setNum func works async
  const [data, setData] = useState({ name: "krish", age: 21 });

  const handleData = () => {
    console.log(data);
    setData((prev) => ({ ...prev, name: "singh", age: 22 }));
    console.log(data);
  };

  const increment = () => {
    console.log(val);
    let cnt = val + 1;
    if (cnt > 35) {
      alert("val not to be greater than 35");
      return;
    }

    setVal(cnt);

    console.log(val);
  };

  const decrement = () => {
    console.log(val);

    let cnt = val - 1;
    if (cnt < 0) {
      alert("val not to be less than 0");
      return;
    }
    setVal(val - 1);
    console.log(val);
  };
  return (
    <div className="parent">
      <h1>This is my app data: {val}</h1>
      <h1>
        this is my name {data.name}, and age is: {data.age}
      </h1>
      <button onClick={(e) => increment(e)}>Increment</button>
      <button onClick={(e) => decrement(e)}>Decrement</button>
      <button onClick={(e) => handleData(e)}>Change</button>
    </div>
  );
};

export default App;
