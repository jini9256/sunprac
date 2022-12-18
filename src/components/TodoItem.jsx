import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo } from "../redux/modules/todos";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const DeleteClick = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <div>
      <StTodo>
        상세보기
        <h3>{todo.title}</h3>
        <StButton onClick={DeleteClick}>삭제하기</StButton>
      </StTodo>
    </div>
  );
};

export default TodoItem;

const StTodo = styled.div`
  border: 1px solid #ddd;
  width: 50%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  border-radius: 12px;
  flex-direction: column;
`;
const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;
