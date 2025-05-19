import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "../../../components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "../../../components/ui/tooltip"
import { Button } from "../../../components/ui/button"
import { Archive } from "lucide-react"
import { Separator } from "../../../components/ui/separator"
import { Session } from "../data/data"
import { Textarea } from "../../../components/ui/textarea"
import { Label } from "../../../components/ui/label"
import { Switch } from "../../../components/ui/switch"

interface MailDisplayProps {
  session: Session
}

export function MailDisplay({ session }: MailDisplayProps) {
  const [selectedSession, setSelectedSession] = React.useState<Session | null>(null);

  React.useEffect(() => {
    console.log("Session updated:", session);
  }, [session]);

  // چک کردن و انتخاب session
  const handleSessionClick = (clickedSession: Session) => {
    if (selectedSession?.id === clickedSession.id) {
      setSelectedSession(null); // اگر همان session دوباره انتخاب شود، انتخاب لغو می‌شود
    } else {
      setSelectedSession(clickedSession);
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* دکمه‌های بالا */}
      <div className="flex items-center justify-between p-2 sm:p-4">
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
        </div>
        <div className="font-bold text-2xl">{session.title}</div>
      </div>
      <Separator />

      {/* پیام‌ها */}
      {session && session.messages.length > 0 ? (
        <div className="flex-1 space-y-4 overflow-y-auto p-2 sm:p-4">
          {session.messages.map((mail) => {
            const isUser = mail.sender.toLowerCase() === "user";
            const isSelected = selectedSession?.id === session.id; // چک کردن اینکه session انتخابی است یا نه

            return (
              <div
                key={mail.id}
                className={`flex items-start gap-2 text-sm ${isUser ? "justify-end" : "justify-start"} ${
                  isSelected ? "bg-gray-800" : "" // اگر انتخابی است، رنگ تیره‌تری اعمال شود
                }`}
                onClick={() => handleSessionClick(session)} // روی session کلیک شده
              >
                {!isUser && (
                  <Avatar>
                    <AvatarImage alt={mail.sender} />
                    <AvatarFallback>
                      {mail.sender.split(" ").map((chunk) => chunk[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={`rounded-xl px-4 py-2 max-w-xs sm:max-w-md ${
                    isUser ? "bg-primary text-white ml-auto" : "bg-muted text-foreground"
                  }`}
                >
                  <div className="font-medium text-sm mb-1">{mail.sender}</div>
                  <div className="text-sm md:text-base">{mail.content}</div>
                </div>
                {isUser && (
                  <Avatar>
                    <AvatarImage alt={mail.sender} />
                    <AvatarFallback>
                      {mail.sender.split(" ").map((chunk) => chunk[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-muted-foreground p-4">No messages in this session</div>
      )}

      {/* فرم پاسخ */}
      <div className="border-t p-2 sm:p-4">
        <form>
          <div className="grid gap-4">
            <Textarea
              className="min-h-[80px] p-3 sm:p-4 text-sm md:text-base"
              placeholder={`ask anything .. `}
            />
            <div className="flex items-center flex-wrap gap-2">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  alert("Reply sent!");
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
  );
}
