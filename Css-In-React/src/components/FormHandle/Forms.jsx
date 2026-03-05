import React from "react";
import Button from "../Buttons/Button";

const Forms = () => {
  const submitHandler = (e) => {
    console.log( e.target.value);
  };
  return (
    <div onChange={(e) => submitHandler(e)} className="form flex items-center content-center gap-4">
      <input
        className="border-black-700 p-4 bg-gray-100 text-xl"
        onSubmit={(e) => submitHandler(e)}
        type="text"
        placeholder="Enter name"
      />
      <Button />
    </div>
  );
};

export default Forms;
