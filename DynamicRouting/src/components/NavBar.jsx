import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul className="navBar">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="link" to="/auth">
              Auth
            </Link>
          </li>

          <li>
            <Link className="link" to="/user">
              Users
            </Link>
          </li>

           <li>
            <Link className="link" to="/user/list">
              UsersList
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
