import { Todo } from "@/contexts/todo/todo-type";
import { TrashIcon } from "lucide-react";

type Props = {
  todoItem: Todo,
  onEditTodo: (id: number) => void,
  onRemoveTodo: (id: number) => void,
  onToggleStatusTodo: (id: number) => void,
}

export default function TodoItem(props: Props) {
  const { todoItem, onEditTodo, onRemoveTodo, onToggleStatusTodo } = props;

  return (
    <div className="flex justify-between items-center px-5 py-4 w-full rounded-lg border bg-gray-900 border-papaya">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          id={`status-${todoItem.id}`}
          checked={todoItem.status === 'completed'}
          onChange={() => onToggleStatusTodo(todoItem.id)}
          className="appearance-none w-6 h-6 border border-foreground rounded-full hover:border-green-500 checked:bg-green-500 checked:border-0"
        />
        <label
          htmlFor={`status-${todoItem.id}`}
          className={`text-papaya hover:opacity-60  ${todoItem.status === 'completed' ? 'line-through opacity-60' : ''}`}
        >
          {todoItem.title}
        </label>
      </div>
      <div className="text-papaya hover:text-foreground transition-colors duration-200 ease-out">
        <TrashIcon
          size={20}
          className="cursor-pointer"
          onClick={() => onRemoveTodo(todoItem.id)}
        />
      </div>
    </div>
  )
}