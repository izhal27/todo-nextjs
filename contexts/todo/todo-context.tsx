'use client'

import React, { createContext, useReducer } from "react";
import { initialState, todoReducer } from "./todo-reducer";
import { TodoAction, TodoState } from "./todo-type";

export type TodoContextType = {
  state: TodoState
  dispatch: React.Dispatch<TodoAction>
}

export const TodoContext = createContext<TodoContextType | null>(null);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);


  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
