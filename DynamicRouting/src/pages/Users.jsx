import React from "react";
import User from "../Components/User";

const Users = () => {
  const userList = [
    { id: 1, name: "Sam" },
    { id: 2, name: "Sid" },
    { id: 3, name: "Abh" },
    { id: 4, name: "Jon" },
    { id: 5, name: "Pointer" },
  ];
  return (
    <div>
      <h1>Users page</h1>
      {userList.map((user, index) => {
        return <User key={index} data={user} />;
      })}
    </div>
  );
};

export default Users;
