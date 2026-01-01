import { Todo } from "@/app/page"

type Props = {
  list: Todo[]
}

export default function TodoSummary(props: Props) {
  const { list } = props;
  const totalTodos = list.length;
  const completedTodos = list.filter(todo => todo.status === 'completed').length;

  return (
    <div className="flex py-8 px-12 justify-between gap-10 items-center border border-papaya rounded-3xl">
      <div className="flex flex-col text-papaya">
        <h2 className="font-bold text-3xl">Todo Done</h2>
        <p className="font-light text-xl">keep it up</p>
      </div>
      <div className="flex w-28 h-28 justify-center items-center rounded-full bg-foreground text-background">
        <p className="font-extrabold text-3xl">{completedTodos}/{totalTodos}</p>
      </div>
    </div>
  )
}