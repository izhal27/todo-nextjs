import { Todo } from "@/app/page"
import TodoItem from "./TodoItem";

type Props = {
  listTodo: Todo[]
}

export default function TodoList(props: Props) {
  const { listTodo } = props;
  return (
    <ul className="flex flex-col gap-5 w-full">
      {
        listTodo.map(todo =>
        (
          <li key={todo.id}>
            <TodoItem todoItem={todo} />
          </li>
        ))
      }
    </ul>
  )
}