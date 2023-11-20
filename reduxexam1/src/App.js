import "./App.css";
// import { createStore } from "redux";
import { configureStore } from " @reduxjs/toolkit";
import { Provider } from "react-redux";
import Page1 from "./Page1";
// const initState = {
//   data1: "none",
//   data2: 0,
// };
const reducer = (state, action) => {
  //initState를 선언해서 사용하기도 하지만 이렇게 안에 undefined를 사용하여 안에 선언할 수 있다.
  if (state === undefined) {
    return {
      data1: "none",
      data2: 0,
    };
  }
  const newState = { ...state };
  switch (action.type) {
    case "STRING":
      newState.data1 = action.data;
      break;
    case "INT":
      newState.data2 = action.data;
      break;
    default:
  }
  return newState;
};

const store = configureStore({ reducer });

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Page1 />
      </div>
    </Provider>
  );
}

export default App;
