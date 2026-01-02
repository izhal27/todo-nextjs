import { Todo } from "@/app/page"
import { Delete, DeleteIcon, Edit, LucideDelete, RemoveFormatting, Trash, Trash2, Trash2Icon, TrashIcon } from "lucide-react";

type Props = {
  todoItem: Todo
}

export default function TodoItem(props: Props) {
  const { todoItem } = props;

  return (
    <div className="flex justify-between items-center px-5 py-4 w-full rounded-lg border bg-gray-900 border-papaya">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          id={`status-${todoItem.id}`}
          checked={todoItem.status === 'completed'}
          onChange={() => { }}
          className="appearance-none w-6 h-6 border border-foreground rounded-full checked:bg-green-500 checked:border-0"
        />
        <label
          htmlFor={`status-${todoItem.id}`}
          className={`text-papaya ${todoItem.status === 'completed' ? 'line-through opacity-60' : ''}`}
        >{todoItem.text}</label>
      </div>
      <div className="flex gap-3 items-center text-papaya">
        <Edit size={20} />
        <TrashIcon size={20} />
      </div>
    </div>
  )
}