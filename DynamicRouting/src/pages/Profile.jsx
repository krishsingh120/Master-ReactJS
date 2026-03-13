import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <h1>Profile</h1> */}

      <div className="flex items-center justify-center">
        <Link to="/profile/men">Men</Link>
        <Link to="/profile/women">Women</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
