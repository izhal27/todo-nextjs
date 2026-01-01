import { useState } from "react";
import AddButton from "../ui/AddButton";
import TodoInput from "./TodoInput";

export default function TodoComposer() {
  const [value, setValue] = useState('');

  const addButtonHandler = () => {
    alert(value);
    setValue("");
  }


  return (
    <div className="flex w-full justify-between items-center gap-6">
      <TodoInput
        onTextChange={setValue}
        value={value}
        onSubmit={() => { }} />
      <AddButton onClick={addButtonHandler} />
    </div>
  )
}