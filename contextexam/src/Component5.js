import React from "react";

const Component5 = ({ user, setUser }) => {
  return (
    <div>
      <h1>Component5</h1>
      <h2>{`Hello ${user} again`}</h2>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button>변경</button>
    </div>
  );
};

export default Component5;
