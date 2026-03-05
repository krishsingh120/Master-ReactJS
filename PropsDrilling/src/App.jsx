import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardData = [
    {
      name: "Aman",
      img: "https://images.unsplash.com/photo-1771226281089-771a31ff54d2?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Krish",
      img: "https://images.unsplash.com/photo-1771226281089-771a31ff54d2?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Tanish",
      img: "https://images.unsplash.com/photo-1771226281089-771a31ff54d2?q=80&w=1414&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="parent">
      {cardData.map((cardData) => (
        <Card data={cardData} />
      ))}
    </div>
  );
};

export default App;
