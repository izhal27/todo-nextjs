'use client'

import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import TodoSummary from "@/components/todo/TodoSummary";
import TodoComposer from "@/components/todo/TodoComposer";
import TodoList from "@/components/todo/TodoList";

export type Todo = {
  id: string
  text: string
  status: 'active' | 'completed'
}

export default function Home() {
  const [todo, setTodo] = useState<Todo[]>([
    {
      id: '1',
      text: 'Belajar CSS',
      status: 'active'
    },
    {
      id: '2',
      text: 'Belajar NextJS',
      status: 'completed'
    },
    {
      id: '3',
      text: 'Belajar NestJS',
      status: 'active'
    },
  ]);

  return (
    <div className="flex flex-col max-w-3xl mx-auto min-h-screen items-center bg-zinc-50 font-sans dark:bg-background">
      <header className="flex flex-col w-full px-6 py-4 mx-auto">
        <Navbar />
      </header>
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-start bg-white dark:bg-background sm:items-start">
        <div className="flex flex-col justify-center items-start gap-9 mx-auto ">
          <div className="w-fit">
            <TodoSummary list={todo} />
          </div>
          <TodoComposer />
          <TodoList listTodo={todo} />
        </div>
      </main>
    </div>
  );
}
