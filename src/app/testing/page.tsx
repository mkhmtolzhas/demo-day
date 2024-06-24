"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from 'react';
import Message from "@/components/ui/message";
import axios from "axios";

export function TestPage() {
  // const { messages, sendMessage } = useWebSocket('ws://localhost:3000');
  // const [prompt, setPrompt] = useState('');
  // const [messagesList, setMessagesList] = useState<any[]>([])

  // const handleSend = (e: any) => {
  //   if (prompt.trim() !== '') {
  //     e.preventDefault();
  //     setMessagesList(prevMessagesList => [...prevMessagesList, { message: prompt, sender: "user" }]);
  //     sendMessage(prompt);
  //     setPrompt('');
  //   }
  // };

  // useEffect(() => {
  //   if (messages.length > 0) {
  //     const lastMessage = messages[messages.length - 1];
  //     setMessagesList(prevMessagesList => [...prevMessagesList, { message: lastMessage, sender: "bot" }]);
  //   }
  // }, [messages]);

  // useEffect(() => {
  //   console.log(messagesList);
  // }, [messagesList]);

  const [messagesList, setMessagesList] = useState<any[]>([]);
  const chatId = "667150ace61e50cc743a8f59"

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/chat/${chatId}/`, {
        headers: {
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzE0ZmRlYmU1YTU0YWNiNzg3ODJmZCIsImVtYWlsIjoibWtobXRjb3JlQGdtYWlsLmNvbSIsImlhdCI6MTcxOTI0NTU1NiwiZXhwIjoxNzE5MjQ5MTU2fQ.B6uMwO-74_fv0K_cJIXNI3jnNa27aNDuuQWm3mMn9yY`
        }
      });
      console.log(response.data.messages);
      setMessagesList(response.data.messages);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMessages();
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 shadow">
        <h1 className="text-2xl font-bold">Chat with Bot</h1>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          {messagesList.map((message, index) => (
            <Message key={index} message={message.content} sender={message.sender} />
          ))}
        </div>
      </div>
      <div className="border-t p-4">
        <form className="flex items-center gap-2" /*onSubmit={handleSend}*/>
          <Input type="text" placeholder="Type your message..." className="flex-1" /*value={prompt} onChange={e => setPrompt(e.target.value)}*/ />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  )
}

export default TestPage