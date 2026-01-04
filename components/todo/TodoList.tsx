'use client'

import { useTodo } from "@/hooks/useTodo";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { state, dispatch } = useTodo();

  const onEditTodoHandler = (id: number) => {
    if (id) {
      dispatch({ type: 'EDIT_TODO', payload: { id, title: '-BERUBAH-' } })
    }
  }

  const onRemoveTodoHandler = (id: number) => {
    if (id) {
      dispatch({ type: 'REMOVE_TODO', payload: id })
    }
  }

  const onToggleStatusTodoHandler = (id: number) => {
    if (id) {
      dispatch({ type: 'TOGGLE_STATUS_TODO', payload: id })
    }
  }

  return (
    <ul className="flex flex-col gap-5 w-full">
      {
        state.todos.map(todo =>
        (
          <li key={todo.id}>
            <TodoItem
              todoItem={todo}
              onEditTodo={onEditTodoHandler}
              onRemoveTodo={onRemoveTodoHandler}
              onToggleStatusTodo={onToggleStatusTodoHandler}
            />
          </li>
        ))
      }
    </ul>
  )
}