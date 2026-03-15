import React from "react";
import { Link, useParams } from "react-router-dom";

const UserDetails = () => {
  const userId = useParams();

  return (
    <div>
      <Link to="/user">Back to User page</Link>
      <h3>User Details page</h3>
      <h3>User Id is : {userId.id} </h3>
    </div>
  );
};

export default UserDetails;
