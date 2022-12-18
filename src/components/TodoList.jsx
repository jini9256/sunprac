import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StTodos>
      {todos.map((item) => {
        return <TodoItem key={item.id} todo={item} />;
      })}
    </StTodos>
  );
};

export default TodoList;

const StTodos = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 0px 24px;
`;
