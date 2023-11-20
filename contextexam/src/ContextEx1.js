import React, { createContext, useState } from "react";
import ContextEx2 from "./ContextEx2";
export const UserContext = createContext();
//callback함수를 사용할때는 대부분이 화살표함수를 사용한다.
//화살표함수는 자신만의 this를 가지고 있지 않기때문에 부모의 this를 호출해서 사용한다
//이것이 정식 function 과 약간의 차이점.

const ContextEx1 = () => {
  const [user, setUser] = useState("Jesse Hall");
  //자식에게 계속 넘기지 않고 하나의 context로 만들어서 넘긴다.
  const context = {
    // key와 value가 이름이 같다면 하나만 작성해줘도 괜찮다.
    user,
    setUser: setUser.bind(this), //메소드를 넘길때 원래 그대로를 가져다 쓰기위해서 this도 함께 넘겨준다.
  };
  return (
    <div>
      {/* UserContext 로 묶은 자식을은 모두 이 Context를 공유한다. */}
      <UserContext.Provider value={context}>
        <h1>Hello {user}</h1>
        <ContextEx2 />
      </UserContext.Provider>
    </div>
  );
};

export default ContextEx1;
