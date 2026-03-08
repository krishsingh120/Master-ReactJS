import React from "react";
import axios from "axios";

const App = () => {
  async function fetchData() {
    console.log("Starting Data fetched!");

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res);

    console.log("Ending Data fetched!");
  }

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos",
    );
    console.log(response.data);
  };
  return (
    <div>
      <button onClick={() => fetchData()}>Get Data</button>
      <button onClick={() => getData()}>Get Users</button>
    </div>
  );
};

export default App;
