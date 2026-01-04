'use client'

import { TodoContext } from "@/contexts/todo/todo-context";
import { useContext } from "react";

export function useTodo() {
  const ctx = useContext(TodoContext);
  if (!ctx) {
    throw new Error('useTodo must be used inside TodoProvider')
  }
  return ctx;
}