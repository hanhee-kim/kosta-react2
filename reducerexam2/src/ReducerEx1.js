import { initTodos, reducer } from "./MyReducer";
import { React, useState, useReducer } from "react";

const ReducerEx1 = () => {
  const [todos, dispatch] = useReducer(reducer, initTodos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          // 반복되는 태그의 맨 바깥에 반복되는 배열의 키값을 지정해준다.
          <div key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}
              />
              {todo.title} &nbsp;
              {todo.count} &nbsp;
              <button
                onClick={() => dispatch({ type: "INCREMENT", id: todo.id })}
              >
                +
              </button>
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default ReducerEx1;
