import React from "react";
import Card from "./components/Cards/Card.jsx";
import Button from "./components/Buttons/Button.jsx";
import Forms from "./components/FormHandle/Forms.jsx";

const App = () => {
  return (
    <div className="parent h-screen w-full bg-indigo-300">
      <Card />
      <Button />
      <div>
        <Forms />
      </div>
    </div>
  );
};

export default App;
