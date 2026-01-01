import { Plus, PlusIcon } from "lucide-react";

type Props = {
  onClick: () => void
}

export default function AddButton(props: Props) {
  return (
    <button
      onClick={() => props.onClick()}
      className="cursor-pointer bg-foreground rounded-full text-background p-3 hover:bg-papaya transition-colors duration-200 ease-out"
    >
      <Plus size={16} strokeWidth="4" />
    </button>
  )
}