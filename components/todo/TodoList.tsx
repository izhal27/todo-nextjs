'use client'

import TodoItem from "./TodoItem";
import { useTodoViewModel } from "@/view-models/useTodoViewModel";

export default function TodoList() {
  const { items, onUpdateTodo, onRemoveTodo, onToggleTodo } = useTodoViewModel();

  return (
    <ul className="flex flex-col gap-5 w-full">
      {
        items.map(item =>
        (
          <li key={item.key}>
            <TodoItem
              item={item}
              onEditTodo={onUpdateTodo}
              onRemoveTodo={onRemoveTodo}
              onToggleStatusTodo={onToggleTodo}
            />
          </li>
        ))
      }
    </ul>
  )
}