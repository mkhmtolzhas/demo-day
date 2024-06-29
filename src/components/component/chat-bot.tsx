"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from 'react';
import Message from "@/components/ui/message";
import Link from "next/link";
import { io, Socket } from 'socket.io-client';
import FBXViewer from "./FBXViewer";

interface MessageInterface {
  message: string;
  userId: string;
  sender: string;
}

interface ChatProps {
  chatID: string;
}

const Chat: React.FC<ChatProps> = ({chatID}) => {
  const initialAnimation = "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Happy+(2).fbx";
  const [currentAnimation, setCurrentAnimation] = useState<string>(initialAnimation);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>('');
  const [roomId, setRoomId] = useState<string>(chatID);
  const [messages, setMessages] = useState<MessageInterface[]>([]);

  // const animations = [
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Happy+(2).fbx",
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Thinking+(3).fbx",
  //   "https://animations-demo-day.s3.eu-north-1.amazonaws.com/Excited+(2).fbx"
  // ];
  const animations = [
    "model/Happy.fbx",
    "model/Thinking.fbx",
    "model/Excited.fbx"
  ]
  // console.log(messages)

  useEffect(() => {
    const newSocket = io('http://localhost:3000', {
      transports: ['websocket'],
      reconnectionAttempts: 5,
    });

    setSocket(newSocket);

    newSocket.emit('join-room', roomId);

    newSocket.on('receive-message', (data: MessageInterface) => {
      console.log(`Received message: ${data.message} from user: ${data.userId}`);
      console.log(data)
      setMessages((prevMessages) => [...prevMessages, data]);
      setCurrentAnimation(animations[0])
    });

    return () => {
      newSocket.emit('leave-room', roomId);
      newSocket.disconnect();
    };
  }, [roomId]);


  const sendPrompt = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessages((prevMessages) => [...prevMessages, {message, userId: chatID, sender: 'user'}]);
    if (socket && message) {
      socket.emit('send-prompt', { roomId, message });
      setCurrentAnimation(animations[1])
      setMessage('');
    }
  };



  return (
    <>
    <div className='w-full h-screen -z-40 fixed'>
      <FBXViewer key={currentAnimation} url={currentAnimation}/>
    </div>
    <div className="flex flex-col h-screen">
    <header className='top-0 left-0 w-full px-[8%] py-[30px] bg-transparent flex justify-center items-center font-mono text-black'>
      <Link href="" className='text-[25px] font-semibold'>Zhanynda AI</Link>
    </header>
      <div className="flex-1 overflow-auto p-6">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <Message key={index} message={message.message} sender={message.sender} />
          ))}
        </div>
      </div>
      <div className="p-4">
        <form className="flex items-center gap-2" /*onSubmit={handleSend}*/>
          <Input type="text" placeholder="Type your message..." className="flex-1 border border-solid rounded-[6px]" value={message} onChange={e => setMessage(e.target.value)}/>
          <Button type="submit" onClick={sendPrompt} className=" bg-[#9B2D31] text-[#fff] border border-solid rounded-[6px]">Send</Button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Chat