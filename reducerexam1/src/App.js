import "./App.css";
import { useReducer, useState } from "react";
//react 자체에서 제공.
//reducer : state를 업데이트하는 역할. 즉 함수(두가지의 함수 state와 action을 가져감 state의 값을 action을 보고 변경)
//dispatch : state 업데이트를 위한 요구 ,( action : 무엇을 무엇으로)의 명령을 디스패치에 담는다.
//          결국 reducer를 호출하는 애
//action : 요구의 내용 ( type과 payload 어떤걸(type) 어떻게(payload)바꿀지 알려줌)

const action_type = {
  deposit: "deposit",
  withdraw: "withdraw",
};

//기존의 state를 가져와서 갱신해서 리턴을 해줘야함
const reducer = (state, action) => {
  //action == > {type:'deposit',payload:10000}
  switch (action.type) {
    case action_type.deposit:
      return +state + +action.payload;
      break; //+연산자를 사용하여 숫자로 변환(문자열 state와 action.payload를 숫자로 변환하는 과정)
    case action_type.withdraw:
      //   if(+state < +action.payload){
      //     return
      //   }
      return +state - +action.payload;
      break;
    default:
      return +state;
  }
};

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input
        type="number"
        value={money}
        onInput={(e) => setMoney(e.target.value)}
        step="1000"
      />
      <button onClick={() => dispatch({ type: "deposit", payload: money })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: money })}>
        출금
      </button>
    </div>
  );
}

export default App;
