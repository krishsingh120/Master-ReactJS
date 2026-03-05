import React from "react";
import Style from "./Button.module.css";

const Button = () => {
  const btnClicked = (e) => {
    console.log("Button is Clicked", e.target);
  };
  return (
    <div className={Style.btnContainer}>
      <button onClick={(e) => btnClicked(e)} className={Style.btn}>
        This is Button
      </button>
    </div>
  );
};

export default Button;
