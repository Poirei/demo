// components/TodoForm.tsx
"use client";

import { AppDispatch } from "@/store";
import { Todo } from "@/store/reducers";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo: Todo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      dispatch({ type: "ADD_TODO", payload: newTodo });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Todo
      </button>
    </form>
  );
}
