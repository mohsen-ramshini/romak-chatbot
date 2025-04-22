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
import logo from "@/public/images/logo.png"
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
import Image from "next/image"
import { AccountSwitcher } from "./account-switcher"
import Profile from "./Profile"

interface MailProps {
  sessions: Session[]
  defaultLayout: number[] | undefined
  defaultCollapsed?: boolean
  navCollapsedSize: number
}
export const accounts = [
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "Alicia Koch",
    email: "alicia@example.com",
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
]

export type Account = (typeof accounts)[number]

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
            collapsible
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true)
              document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(true)}`
            }}
            onExpand={() => {
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
            >
              <Profile
                name="Ali Rezaei"
                email="ali.rezaei@example.com"
                avatarUrl=""
                isCollapsed={isCollapsed}
              />
            </div>

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
            <Tabs defaultValue="all" className="overflow-auto h-full">
              <div className="flex items-center px-4 py-2">
                <div className="text-lg lg:text-xl font-bold">
                <Image
                      src="https://romaktrading.com/wp-content/uploads/2021/07/romak-logo-1.png"
                      alt="Romak Logo"
                      width={120}
                      height={40}
                      priority
                  />
                </div>
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
                <Insights isCollapsed={isCollapsed}/>
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
