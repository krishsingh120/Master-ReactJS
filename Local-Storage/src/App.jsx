import React from "react";

const App = () => {
  const user = { name: "krish", age: 22 };
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("email", "krishsin2254@gmail.com");

  let data = localStorage.getItem("user");
  data = JSON.parse(data);
  console.log(data.name);

  // localStorage.clear();
  // sessionStorage.clear();
  return (
    <div>
      <h1>Hey!</h1>
    </div>
  );
};

export default App;
