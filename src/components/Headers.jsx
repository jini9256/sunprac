import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  background-color: #4b56d2;
  display: flex;
  justify-content: space-between;
  box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`;

const Headers = () => {
  return (
    <div>
      <StHeader>
        <div>
          <h1>Todo-List</h1>
        </div>
        <div>React</div>
      </StHeader>
    </div>
  );
};

export default Headers;
