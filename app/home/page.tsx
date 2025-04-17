import { cookies } from "next/headers"
import Image from "next/image"

import { Mail } from "@/features/home/components/mail"
import { accounts, mails } from "@/features/home/data/data"

export default async function MailPage() {
  const cookieStore = await cookies() 
  const layout = cookieStore.get("react-resizable-panels:layout:mail")
  const collapsed = cookieStore.get("react-resizable-panels:collapsed")

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined
  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  return (
    <>
      <div className=" flex-col md:flex h-full">
        <Mail
          accounts={accounts}
          mails={mails}
          defaultLayout={defaultLayout}
          defaultCollapsed={defaultCollapsed}
          navCollapsedSize={4}
        />
      </div>
    </>
  )
}
