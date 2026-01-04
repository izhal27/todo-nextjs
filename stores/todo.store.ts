import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type StatusTodo = 'active' | 'completed';

export type Todo = {
  id: number,
  title: string,
  status: StatusTodo
}

type TodoState = {
  todos: Todo[];
};

type TodoActions = {
  addTodo: (todo: Todo) => void
  updateTodo: (id: Todo['id'], title: Todo['title']) => void
  removeTodo: (id: Todo['id']) => void
  toggleStatus: (id: Todo['id']) => void
};

export const useTodoStore = create<TodoState & TodoActions>()(
  persist((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({
      todos: [...state.todos, todo]
    })),
    updateTodo: (id, title) =>
      set((state) => ({
        todos: state.todos.map((t) =>
          t.id === id ? { ...t, title } : t
        ),
      })),

    removeTodo: (id) =>
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id),
      })),

    toggleStatus: (id) =>
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { ...todo, status: todo.status === 'active' ? 'completed' : 'active' }
            : todo
        ),
      })),
  }),
    { name: 'todo-sorage' }
  )
);