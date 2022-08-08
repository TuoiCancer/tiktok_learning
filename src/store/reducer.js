import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from "./constants";

const initState = {
  todoInput: "",
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      const newState = [...state.todos];
      newState.splice(action.payload, 1);
      return {
        ...state,
        todos: newState,
      };
  }
}
export { initState };
export default reducer;
