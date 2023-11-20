import React from "react";
import { useState } from "react";
import Component2 from "./Component2";

const Component = () => {
  const [user, setUser] = useState("Jesse Hall");
  return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} setUser={setUser} />
    </div>
  );
};

export default Component;
