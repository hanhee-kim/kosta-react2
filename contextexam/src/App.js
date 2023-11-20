import logo from "./logo.svg";
import "./App.css";
import Component from "./Component";
import ContextEx1 from "./ContextEx1";

function App() {
  return (
    <div className="App">
      {/* 자식컴포넌트에서 사용할 때 모두 인자로 값을 넘겨줄 때..(불필요한 코드가 생김) */}
      {/* <Component /> */}
      {/* Context를 사용해서 하나의 context로 사용할 값을 넘겨줄때 */}
      <ContextEx1 />
    </div>
  );
}

export default App;
