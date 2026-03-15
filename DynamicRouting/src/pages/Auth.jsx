import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div>
      <h1>Auth Page</h1>
      <h3>
        <Link to="/">Back to home</Link>
      </h3>

      {/* <NavLink to="login">Login</NavLink> */}
      <NavLink to="">Login</NavLink>
      <NavLink to="register">Register</NavLink>
      <Outlet />
    </div>
  );
};

export default Auth;
