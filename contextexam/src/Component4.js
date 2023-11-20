import React from "react";
import Component5 from "./Component5";

const Component4 = ({ user, setUser }) => {
  return (
    <div>
      <h1>Component4</h1>
      <Component5 user={user} setUser={setUser} />
    </div>
  );
};

export default Component4;
