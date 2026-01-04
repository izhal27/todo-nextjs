'use client'

import { useState } from "react";
import AddButton from "../ui/AddButton";
import TodoInput from "./TodoInput";
import { useTodoStore } from "@/stores/todo.store";

export default function TodoComposer() {
  const [value, setValue] = useState('');
  const addTodo = useTodoStore(state => state.addTodo);

  const addButtonHandler = () => {
    addTodo({ id: Date.now(), title: value, status: 'active' });
    setValue("");
  }


  return (
    <div className="flex w-full justify-between items-center gap-6">
      <TodoInput
        onTextChange={setValue}
        value={value}
        onSubmit={addButtonHandler} />
      <AddButton onClick={addButtonHandler} />
    </div>
  )
}