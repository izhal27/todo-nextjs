import { Todo } from "@/app/page"

type Props = {
  list: Todo[]
}

export default function TodoList(props: Props) {
  return <h2>This is a list</h2>
}