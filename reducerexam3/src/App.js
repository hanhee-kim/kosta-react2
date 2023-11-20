import "./App.css";
import MyNickname from "./MyNickname";

import { initState, reducer } from "./MyReducer";
import { useState, useReducer } from "react";

function App() {
  const [info, dispatch] = useReducer(reducer, initState);
  const [id, setId] = useState("");
  const [nickname, setNickname] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  return (
    <div className="App">
      <label>{info.id}</label>
      <input type="text" onInput={(e) => setId(e.target.value)} />
      <button onClick={() => dispatch({ name: "id", value: id })}>
        아이디변경
      </button>
      {/* <input type="text" onInput={(e) => dispatch({ name: "id", value: e.target.value })} /> */}
      <br />
      {/* <label>{info.nickname}</label>
      <input type="text" onInput={(e) => setNickname(e.target.value)} />
      <button onClick={() => dispatch({ name: "nickname", value: nickname })}>
        닉네임변경
      </button> */}
      {/* <input type="text" onInput={(e) => dispatch({ name: "nickname", value: e.target.value })} /> */}
      <MyNickname info={info} dispatch={dispatch} />
      <br />
      <label>{info.subject}</label>
      <input type="text" onInput={(e) => setSubject(e.target.value)} />
      <button onClick={() => dispatch({ name: "subject", value: subject })}>
        전공 변경
      </button>
      <br />
      <label>{info.grade}</label>
      <input type="text" onInput={(e) => setGrade(e.target.value)} />
      <button onClick={() => dispatch({ name: "grade", value: grade })}>
        학년 변경
      </button>
      <br />
    </div>
  );
}

export default App;
