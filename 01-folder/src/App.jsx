import React from "react";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <h1>Hello!</h1>
        <h2>Hey!!</h2>
        <Card />
      </div>

      <div>
        <NavBar />
      </div>

      <p>This is basic of react.</p>
    </>
  );
}

export default App;
