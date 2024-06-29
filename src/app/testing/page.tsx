// "use client"
// import React, { useEffect, useState } from 'react';
// import { io, Socket } from 'socket.io-client';

// interface Message {
//   message: string;
//   userId: string;
// }

// const ChatComponent: React.FC = () => {
//   const [socket, setSocket] = useState<Socket | null>(null);
//   const [message, setMessage] = useState<string>('');
//   const [roomId, setRoomId] = useState<string>('default-room');
//   const [messages, setMessages] = useState<Message[]>([]);

//   useEffect(() => {
//     const newSocket = io('http://localhost:3000', {
//       transports: ['websocket'],
//       reconnectionAttempts: 5,
//     });

//     setSocket(newSocket);

//     newSocket.emit('join-room', roomId);

//     newSocket.on('receive-message', (data: Message) => {
//       console.log(`Received message: ${data.message} from user: ${data.userId}`);
//       setMessages((prevMessages) => [...prevMessages, data]);
//     });

//     return () => {
//       newSocket.emit('leave-room', roomId);
//       newSocket.disconnect();
//     };
//   }, [roomId]);

//   const sendMessage = () => {
//     if (socket && message) {
//       socket.emit('send-message', { roomId, message });
//       setMessage('');
//     }
//   };

//   const sendPrompt = async (e: React.FormEvent) => {
//     if (socket && message) {
//       socket.emit('send-prompt', { roomId, message });
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <h1>Chat Room: {roomId}</h1>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Type a message"
//       />
//       <button onClick={sendMessage}>Send Message</button>
//       <div>
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>{msg.userId}:</strong> {msg.message}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChatComponent;


"use client"
import React, { useEffect, useState } from 'react';

const Component = () => {
  return (
    <div>Component</div>
  )
}

export default Component