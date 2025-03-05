// components/TodoList.tsx
"use client";

import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function TodoList() {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div className="space-y-4">
      {todos.length === 0 ? (
        <p className="text-black mx-auto">No todos yet!</p>
      ) : (
        <div className="todo-list">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="todo-item flex items-center gap-4 p-4 border rounded-lg"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                }
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_TODO", payload: todo.id })
                }
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
