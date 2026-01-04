'use client';

import { useTodoStore } from '@/stores/todo.store';

export function useTodoViewModel() {
  const todos = useTodoStore((s) => s.todos);
  const updateTitle = useTodoStore((s) => s.updateTodo);
  const toggleStatus = useTodoStore((s) => s.toggleStatus);
  const removeTodo = useTodoStore((s) => s.removeTodo);

  const items = todos.map((todo) => ({
    key: String(todo.id),
    label: todo.title,
    completed: todo.status === 'completed',
  }));

  function onUpdateTodo(key: string, title: string) {
    const id = Number(key);
    const clean = title.trim();

    if (!clean) return;

    updateTitle(id, clean);
  }

  function onToggleTodo(key: string) {
    toggleStatus(Number(key));
  }

  function onRemoveTodo(key: string) {
    removeTodo(Number(key));
  }

  return {
    items,
    onUpdateTodo,
    onToggleTodo,
    onRemoveTodo,
  };
}
