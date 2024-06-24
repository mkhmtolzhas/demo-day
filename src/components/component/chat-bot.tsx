"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ChatBot() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Chat with Bot</h1>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center text-2xl">🤖</div>
            <div className="bg-muted rounded-2xl p-4 max-w-[70%]">
              <p>Hello! I'm an AI assistant. How can I help you today?</p>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-primary rounded-2xl p-4 max-w-[70%] text-primary-foreground">
              <p>Hi there! I'd like to learn more about your capabilities.</p>
            </div>
            <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center text-2xl text-primary-foreground">
              😀
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-muted w-10 h-10 flex items-center justify-center text-2xl">🤖</div>
            <div className="bg-muted rounded-2xl p-4 max-w-[70%]">
              <p>
                As an AI assistant, I'm knowledgeable about a wide range of topics and can help with tasks like
                research, analysis, writing, and problem-solving. I'm happy to chat and share my capabilities with you.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-end">
            <div className="bg-primary rounded-2xl p-4 max-w-[70%] text-primary-foreground">
              <p>That sounds great! I'd love to learn more. What kind of information can you provide?</p>
            </div>
            <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center text-2xl text-primary-foreground">
              🙂
            </div>
          </div>
        </div>
      </div>
      <div className="border-t p-4">
        <form className="flex items-center gap-2">
          <Input type="text" placeholder="Type your message..." className="flex-1" />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}
