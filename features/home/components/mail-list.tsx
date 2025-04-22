import * as React from "react"
import { Session } from "../data/data"

interface MailListProps {
  items: Session[]
  onSessionSelect: (sessionId: string) => void
}

export function MailList({ items, onSessionSelect }: MailListProps) {
  return (
    <div className="space-y-2 max-h-[70vh] overflow-y-auto px-2 md:px-4">
      {items.map((session) => (
        <div
          key={session.id}
          className="rounded-lg border p-3 md:p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => onSessionSelect(session.id)}
        >
          <div className="font-semibold text-sm md:text-base line-clamp-1">{session.title}</div>
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
            {session.messages.length} messages
          </div>
        </div>
      ))}
    </div>
  )
}
