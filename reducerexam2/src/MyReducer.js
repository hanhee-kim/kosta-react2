import React from "react";
export const initTodos = [
  {
    id: 1,
    title: "Todo1",
    count: 0,
    complete: false,
  },
  {
    id: 2,
    title: "Todo2",
    count: 0,
    complete: false,
  },
  {
    id: 3,
    title: "Todo3",
    count: 0,
    complete: false,
  },
];
export const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else return todo;
      });
      break;
    case "INCREMENT":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, count: todo.count + 1 };
        } else return todo;
      });
      break;
    default:
      return state;
  }
};
