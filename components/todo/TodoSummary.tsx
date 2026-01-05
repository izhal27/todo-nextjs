'use client'

import { useTodoStore } from "@/stores/todo.store";

export default function TodoSummary() {
  const todos = useTodoStore(state => state.todos);
  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.status === 'completed').length;

  return (
    <div className="flex w-full px-6 md:px-12 py-4 md:py-8  justify-between gap-10 items-center border border-papaya rounded-3xl">
      <div className="flex flex-col text-papaya">
        <h2 className="font-bold text-xl md:text-3xl">Todo Done</h2>
        <p className="font-light md:text-xl">keep it up</p>
      </div>
      <div className="flex w-28 h-28 justify-center items-center rounded-full bg-foreground text-background">
        <p className="font-extrabold text-3xl">{completedTodos}/{totalTodos}</p>
      </div>
    </div>
  )
}