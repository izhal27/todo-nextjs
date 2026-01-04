import { TodoItemVM } from "@/view-models/todoItemVM-type";
import { TrashIcon } from "lucide-react";

type Props = {
  item: TodoItemVM,
  onEditTodo: (id: string, title: string) => void,
  onRemoveTodo: (id: string) => void,
  onToggleStatusTodo: (id: string) => void,
}

export default function TodoItem(props: Props) {
  const { item, onRemoveTodo, onToggleStatusTodo } = props;

  return (
    <div className="flex justify-between items-center px-5 py-4 w-full rounded-lg border bg-gray-900 border-papaya">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          id={`status-${item.key}`}
          checked={item.completed}
          onChange={() => onToggleStatusTodo(item.key)}
          className="appearance-none w-6 h-6 border border-foreground rounded-full hover:border-green-500 checked:bg-green-500 checked:border-0"
        />
        <label
          htmlFor={`status-${item.key}`}
          className={`text-papaya hover:opacity-60  ${item.completed ? 'line-through opacity-60' : ''}`}
        >
          {item.label}
        </label>
      </div>
      <div className="text-papaya hover:text-foreground transition-colors duration-200 ease-out">
        <TrashIcon
          size={20}
          className="cursor-pointer"
          onClick={() => onRemoveTodo(item.key)}
        />
      </div>
    </div>
  )
}