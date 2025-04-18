// hooks/use-chat-config.ts
import { atom, useAtom } from "jotai"

type ChatConfig = {
  selectedSessionId: string | null
  selectedMessageId: string | null
}

const chatConfigAtom = atom<ChatConfig>({
  selectedSessionId: null,
  selectedMessageId: null,
})

export function useChatConfig() {
  return useAtom(chatConfigAtom)
}
