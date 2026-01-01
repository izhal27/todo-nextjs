import { ChangeEvent, KeyboardEventHandler } from "react"

type Props = {
  value: string
  onTextChange: (data: string) => void
  error?: string;
  onSubmit: () => void
}

export default function TodoInput(props: Props) {
  const { value, onTextChange, error, onSubmit } = props;

  return (
    <div className="space-y-2 w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit()
        }}
        placeholder="write your next task"
        className="outline px-4 py-2 rounded-2xl w-full outline-papaya" />
    </div>
  )
}