import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

//store에 보내는 이름은 무조건 reducer이여야한다.
const store = configureStore({ reducer: rootReducer });
export default store;
