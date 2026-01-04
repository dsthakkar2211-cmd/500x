"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ChatbotProps {
  isOpen: boolean
  onClose: () => void
}

export function Chatbot({ isOpen, onClose }: ChatbotProps) {
  // Prevent body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Chatbot panel - slides in from right */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-2/3 md:w-1/2 lg:w-1/3 z-[9999] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#181a20]">
          <h2 className="text-lg font-semibold text-white">Support</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-700 rounded-md transition-colors text-white"
            aria-label="Close chatbot"
          >
            <X size={20} />
          </button>
        </div>

        {/* Iframe container */}
        <div className="h-[calc(100%-64px)] w-full">
          <iframe
            src="https://support.500x.exchange/?token="
            className="w-full h-full border-0"
            title="Support Chat"
            allow="microphone; camera"
          />
        </div>
      </div>
    </>
  )
}

