//context를 가져다 쓸때에는 useContext를 사용한다
import React, { useContext } from "react";
import { UserContext } from "./ContextEx1";
const ContextEx5 = () => {
  const context = useContext(UserContext);
  return (
    <div>
      <h1>ContextEx5</h1>
      <h2>{`Hello ${context.user} again`}</h2>
      <input type="text" onChange={(e) => context.setUser(e.target.value)} />
    </div>
  );
};

export default ContextEx5;
