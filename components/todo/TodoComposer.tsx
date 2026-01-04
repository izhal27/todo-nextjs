'use client'

import { useState } from "react";
import AddButton from "../ui/AddButton";
import TodoInput from "./TodoInput";
import { useTodo } from "@/hooks/useTodo";

export default function TodoComposer() {
  const [value, setValue] = useState('');
  const { dispatch } = useTodo();

  const addButtonHandler = () => {
    dispatch({ type: "ADD_TODO", payload: value });
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