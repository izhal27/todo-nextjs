'use client'

import { TodoProvider } from "@/contexts/todo/todo-context"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TodoProvider>
      {children}
    </TodoProvider>
  )
}