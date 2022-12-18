import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    const newTodo = {
      id: uuidv4(),
      title,
    };

    dispatch(addTodo(newTodo));

    setTitle("");
  };

  return (
    <StFormContainer>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="label">오늘 할일을 적어보세요.</label>
        <StInput
          id="label"
          type="text"
          value={title}
          placeholder="여기에 적으세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </StFormContainer>
  );
};

export default AddForm;

const StFormContainer = styled.div`
  display: flex;
  gap: 24px;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #82c3ec;
  border-radius: 20px;
  margin-bottom: 24px;
`;

const StButton = styled.button`
  border: none;
  background-color: #eee;
  height: 25px;
  cursor: pointer;
  width: 120px;
  border-radius: 12px;
`;

const StInput = styled.input`
  border: 1px solid #eee;
  margin: 0 24px;
  height: 25px;
  width: 300px;
  border-radius: 12px;
  outline: none;
  padding: 0 10px;
  text-align: center;
`;
