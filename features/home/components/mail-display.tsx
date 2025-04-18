import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { format } from "date-fns"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Archive } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Session } from "../data/data"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface MailDisplayProps {
  session: Session
}

export function MailDisplay({ session }: MailDisplayProps) {
  // اضافه کردن useEffect برای لاگ کردن تغییرات session
  React.useEffect(() => {
    console.log("Session updated:", session)
  }, [session]) // این اثر هر بار که session تغییر کند اجرا خواهد شد.

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center p-2">
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!session}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Archive</TooltipContent>
          </Tooltip>
          {/* دکمه جدید اضافه شده */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" disabled={!session}>
                <Archive className="h-4 w-4" />
                <span className="sr-only">Add to Archive</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add to Archive</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <Separator />
      {session && session.messages.length > 0 ? (
        <div className="flex flex-1 flex-col">
          {session.messages.map((mail) => (
            <div key={mail.id} className="flex items-start p-4">
              <div className="flex items-start gap-4 text-sm">
                <Avatar>
                  <AvatarImage alt={mail.sender} />
                  <AvatarFallback>
                    {mail.sender.split(" ").map((chunk) => chunk[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="font-semibold">{mail.sender}</div>
                  <div>{mail.content}</div>
                </div>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                {/* نمایش تاریخ */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">No messages in this session</div>
      )}
      
      {/* فرم ارسال پاسخ */}
      <div className="p-4">
        <form>
          <div className="grid gap-4">
            <Textarea
              className="p-4"
              placeholder={`Reply ${session?.messages[0]?.sender || "User"}...`}
            />
            <div className="flex items-center">
              <Label
                htmlFor="mute"
                className="flex items-center gap-2 text-xs font-normal"
              >
                <Switch id="mute" aria-label="Mute thread" /> Mute this thread
              </Label>
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  alert("Reply sent!") // نمایش پیام ارسال به عنوان نمونه
                }}
                size="sm"
                className="ml-auto"
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
