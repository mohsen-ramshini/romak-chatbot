import * as React from "react"
import { Session } from "../data/data" // فرض می‌کنیم که Session به درستی وارد شده است.

interface MailListProps {
  items: Session[]
  onSessionSelect: (sessionId: string) => void
}

export function MailList({ items, onSessionSelect }: MailListProps) {
  return (
    <div>
      {items.map((session) => (
        <div
          key={session.id}
          className="session-item p-2 cursor-pointer hover:bg-gray-100"
          onClick={() => onSessionSelect(session.id)} // فراخوانی onSessionSelect با شناسه session
        >
          <div className="font-semibold">{session.title}</div>
          <div className="text-xs text-gray-500">{session.messages.length} messages</div>
        </div>
      ))}
    </div>
  )
}
