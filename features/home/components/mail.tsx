"use client"

import * as React from "react"
import {
  Archive,
  ArchiveX,
  File,
  Inbox,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Trash2,
  Users2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TooltipProvider } from "@/components/ui/tooltip"
import { MailList } from "./mail-list"
import { Nav } from "./nav"
import { Session } from "../data/data"
import { useChatConfig } from "../hooks/use-chat-config"
import { MailDisplay } from "./mail-display"
import { Insights } from "./InsightsCard"

interface MailProps {
  sessions: Session[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}

export function Mail({
  sessions,
  defaultLayout = [20, 32, 48],
  defaultCollapsed = false,
  navCollapsedSize,
}: MailProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)
  const [selectedSession, setSelectedSession] = React.useState<Session | null>(null)
  const [config] = useChatConfig()

  React.useEffect(() => {
    const session = sessions.find(s => s.id === config.selectedSessionId)
    setSelectedSession(session || sessions[0])
  }, [config.selectedSessionId, sessions])

  const handleSessionSelect = (sessionId: string) => {
    const selected = sessions.find(s => s.id === sessionId)
    setSelectedSession(selected || null)
  }

  return (
    <TooltipProvider delayDuration={0}>
      {/* نسخه موبایل */}
      <div className="block md:hidden px-2">
        <Tabs defaultValue="list" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="nav">Nav</TabsTrigger>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="mail">Mail</TabsTrigger>
          </TabsList>

          <TabsContent value="nav">
            <Nav
              isCollapsed={false}
              links={[
                { title: "Inbox", label: "128", icon: Inbox, variant: "default" },
                { title: "Drafts", label: "9", icon: File, variant: "ghost" },
                { title: "Sent", label: "", icon: Send, variant: "ghost" },
                { title: "Junk", label: "23", icon: ArchiveX, variant: "ghost" },
                { title: "Trash", label: "", icon: Trash2, variant: "ghost" },
                { title: "Archive", label: "", icon: Archive, variant: "ghost" },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={false}
              links={[
                { title: "Social", label: "972", icon: Users2, variant: "ghost" },
                { title: "Updates", label: "342", icon: Users2, variant: "ghost" },
                { title: "Forums", label: "128", icon: MessagesSquare, variant: "ghost" },
                { title: "Shopping", label: "8", icon: ShoppingCart, variant: "ghost" },
                { title: "Promotions", label: "21", icon: Archive, variant: "ghost" },
              ]}
            />
          </TabsContent>

          <TabsContent value="list">
            <div className="my-4">
              <div className="relative mb-2">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
              <MailList items={sessions} onSessionSelect={handleSessionSelect} />
            </div>
          </TabsContent>

          <TabsContent value="mail">
            {selectedSession ? (
              <MailDisplay key={selectedSession.id} session={selectedSession} />
            ) : (
              <div className="text-center text-muted-foreground mt-4">Select a session</div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* نسخه دسکتاپ */}
      <div className="hidden md:flex h-full">
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(sizes)}`
          }}
          className="h-full items-stretch"
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
            }}
            onResize={() => {
              setIsCollapsed(false)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(false)}`
            }}
            className={cn(
              "transition-all duration-300 ease-in-out",
              isCollapsed && "min-w-[50px]"
            )}
          >
            <div
              className={cn(
                "flex h-[52px] items-center justify-center",
                isCollapsed ? "h-[52px]" : "px-2"
              )}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                { title: "Inbox", label: "128", icon: Inbox, variant: "default" },
                { title: "Drafts", label: "9", icon: File, variant: "ghost" },
                { title: "Sent", label: "", icon: Send, variant: "ghost" },
                { title: "Junk", label: "23", icon: ArchiveX, variant: "ghost" },
                { title: "Trash", label: "", icon: Trash2, variant: "ghost" },
                { title: "Archive", label: "", icon: Archive, variant: "ghost" },
              ]}
            />
            <Separator />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                { title: "Social", label: "972", icon: Users2, variant: "ghost" },
                { title: "Updates", label: "342", icon: Users2, variant: "ghost" },
                { title: "Forums", label: "128", icon: MessagesSquare, variant: "ghost" },
                { title: "Shopping", label: "8", icon: ShoppingCart, variant: "ghost" },
                { title: "Promotions", label: "21", icon: Archive, variant: "ghost" },
              ]}
            />
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
            <Tabs defaultValue="all">
              <div className="flex items-center px-4 py-2">
                <h1 className="text-lg lg:text-xl font-bold">Rmoak</h1>
                <TabsList className="ml-auto">
                  <TabsTrigger value="all" className="text-zinc-600 dark:text-zinc-200">
                    Sessions
                  </TabsTrigger>
                  <TabsTrigger value="unread" className="text-zinc-600 dark:text-zinc-200">
                    Insights
                  </TabsTrigger>
                </TabsList>
              </div>
              <Separator />
              <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />
                  </div>
                </form>
              </div>
              <TabsContent value="all" className="m-0 overflow-auto max-h-[70vh]">
                <MailList items={sessions} onSessionSelect={handleSessionSelect} />
              </TabsContent>
              <TabsContent value="unread" className="m-0 overflow-auto">
                <Insights />
              </TabsContent>
            </Tabs>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={defaultLayout[2]} minSize={30}>
            {selectedSession ? (
              <MailDisplay key={selectedSession.id} session={selectedSession} />
            ) : (
              <div className="text-center text-muted-foreground">Please select a session.</div>
            )}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </TooltipProvider>
  )
}
