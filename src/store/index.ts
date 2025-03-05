"use client";

import { createStore } from "redux";
import { Todo, todoReducer } from "./reducers";

export interface TodoState {
  todos: Todo[];
  filter: "all" | "active" | "completed";
}

const loadPersistedState = (): TodoState | undefined => {
  if (typeof window === "undefined") return undefined;

  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (e) {
    console.log("Failed to load persisted state:", e);
    return undefined;
  }
};

export const store = createStore(todoReducer, loadPersistedState());

store.subscribe(() => {
  try {
    const state = JSON.stringify(store.getState());
    localStorage.setItem("reduxState", state);
  } catch (e) {
    console.log("Failed to persist state:", e);
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
