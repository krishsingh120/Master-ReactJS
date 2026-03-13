import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full h-12 bg-cyan-600 flex gap-8 items-center justify-center">
      <Link to="/" >Home</Link>
      <Link to="/about" >About</Link>
      <Link to="/profile" >Profile</Link>
      <Link to="/contact" >Contact</Link>
    </div>
  );
};

export default NavBar;
