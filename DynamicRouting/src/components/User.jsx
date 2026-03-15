import React from "react";
import { Link } from "react-router-dom";

const User = ({ data }) => {
  return (
    <div>
     <Link to={`/user/${data.id}`} > {data.name}</Link>
    </div>
  );
};

export default User;
