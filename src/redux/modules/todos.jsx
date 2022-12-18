// src/modules/counter.js

import React from "react";
import { v4 as uuidv4 } from "uuid";

// action items
const TODOS = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

export const addTodo = (payload) => {
  return { type: TODOS, payload };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
// 초기 상태값
const initialState = [
  {
    id: uuidv4(),
    title: "잘 만들어지고 있나요?",
  },
  {
    id: uuidv4(),
    title: "어디쯤 완성했나요...?",
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default todos;
