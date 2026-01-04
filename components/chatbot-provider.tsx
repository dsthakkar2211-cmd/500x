"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Chatbot } from "./chatbot"

interface ChatbotContextType {
  openChatbot: () => void
  closeChatbot: () => void
  isOpen: boolean
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined)

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openChatbot = () => setIsOpen(true)
  const closeChatbot = () => setIsOpen(false)

  return (
    <ChatbotContext.Provider value={{ openChatbot, closeChatbot, isOpen }}>
      {children}
      <Chatbot isOpen={isOpen} onClose={closeChatbot} />
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (context === undefined) {
    throw new Error("useChatbot must be used within a ChatbotProvider")
  }
  return context
}

