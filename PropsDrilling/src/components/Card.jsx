import React from "react";

const Card = ({ data, index }) => {
  console.log(data);

  return (
    <div className="card">
      <img src={data.img} alt="" />
      <h1>hey, my name is: {data.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
