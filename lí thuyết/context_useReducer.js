// sử dụng kết hợp giữa useContext và useReducer
// các file nằm trong thư mục Todo :
import { useRef } from "react";
import { useStore, actions } from "./store";

function App() {
  console.log("re-render");
  const [state, dispatch] = useStore();

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(actions.addTodo(state.todoInput));
    dispatch(actions.setToDo(""));
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={state.todoInput}
        placeholder="enter todo..."
        onChange={(e) => {
          dispatch(actions.setToDo(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      {state.todos.map((todo, i) => {
        return <li key={i}>{todo}</li>;
      })}
    </div>
  );
}
