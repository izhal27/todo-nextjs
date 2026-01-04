import Navbar from "@/components/layout/Navbar";
import TodoSummary from "@/components/todo/TodoSummary";
import TodoComposer from "@/components/todo/TodoComposer";
import TodoList from "@/components/todo/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-background mb-14">
      <Navbar />
      <main className="pt-16">
        <div className="flex flex-col justify-center items-start gap-9 mx-auto">
          <div className="w-fit">
            <TodoSummary />
          </div>
          <TodoComposer />
          <TodoList />
        </div>
      </main>
    </div>
  );
}
