import { Todo, TodoAction, TodoState } from "./todo-type";

export const initialState: { todos: Todo[] } = {
  todos: [{
    id: 1,
    title: 'Belajar CSS',
    status: 'active'
  },
  {
    id: 2,
    title: 'Belajar NextJS',
    status: 'active'
  },
  {
    id: 3,
    title: 'Belajar NestJS',
    status: 'active'
  }]
}

export function todoReducer(state: TodoState = initialState, action: TodoAction): TodoState {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          { id: Date.now(), title: action.payload, status: 'active' }
        ]
      }
    case "EDIT_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, title: action.payload.title }
            : todo
        ),
      };
    case "REMOVE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id != action.payload)
      }
    case "TOGGLE_STATUS_TODO":
      return {
        todos: state.todos.map(todo => todo.id === action.payload ? {
          ...todo,
          status: todo.status === 'active' ? 'completed' : 'active'
        } : todo)
      }
    default:
      return state;
  }
}