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
    }
  ]);

  return (
    <div className="flex flex-col items-center bg-zinc-50 font-sans dark:bg-background mb-14">
      <Navbar />
      <main className="pt-16">
        <div className="flex flex-col justify-center items-start gap-9 mx-auto">
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
