export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export interface TodoState {
  todos: Todo[];
  filter: "all" | "active" | "completed";
}

export type TodoActionTypes =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "SET_FILTER"; payload: "all" | "active" | "completed" };

const initialState: TodoState = {
  todos: [],
  filter: "all" as const,
};

export const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo: Todo) => {
          if (todo.id === action.payload) {
            return { ...todo, completed: !todo.completed };
          }

          return todo;
        }),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo: Todo) => todo.id !== action.payload),
      };
    // case "EDIT_TODO":
    //   return {
    //     ...state,
    //     todos: state.todos.map((todo: Todo) => {
    //       if (todo.id === action.payload) {
    //         return { ...todo, text: "new text" };
    //       }
    //       return todo;
    //     }),
    //   };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
