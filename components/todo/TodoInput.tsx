type Props = {
  value: string
  onTextChange: (data: string) => void
  error?: string;
  onSubmit: () => void
}
export default function TodoInput(props: Props) {
  const { value, onTextChange, error, onSubmit } = props;

  return (
    <div className="space-y-2 w-full text-papaya">
      <input
        type="text"
        value={value}
        onChange={(e) => onTextChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSubmit()
        }}
        placeholder="write your next task"
        className="outline-0 px-4 py-2 bg-gray-900 rounded-2xl w-full" />
    </div>
  )
}