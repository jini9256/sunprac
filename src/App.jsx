import Addform from "./components/Addform";
import Headers from "./components/Headers";
import TodoList from "./components/TodoList";
import styled from "styled-components";

function App() {
  // const dispatch = useDispatch();
  // const todosStore = useSelector(state=>state)
  return (
    <stBody>
      <Headers />
      <StMain>
        {/* 입력부분 */}
        <Addform />
        {/* 화면 렌더링되는 부분 */}
        <TodoList />
      </StMain>
    </stBody>
  );
}

export default App;

const stBody = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0px auto;
`;

const StMain = styled.div`
  /* background-color: #f1f6f5; */
`;
