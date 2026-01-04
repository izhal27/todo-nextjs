export type Todo = {
  id: number
  title: string
  status: 'active' | 'completed'
}

export type TodoState = {
  todos: Todo[]
}

export type TodoAction =
  | { type: 'ADD_TODO', payload: string }
  | { type: 'EDIT_TODO', payload: { id: number, title: string } }
  | { type: 'REMOVE_TODO', payload: number }
  | { type: 'TOGGLE_STATUS_TODO', payload: number }