import React, { useEffect, useState, useRef } from 'react';
import ChatBar from './chatbar';
import ChatBody from './chatbody';
import ChatFooter from './chatfooter';

const ChatPage = ({ socket }) => {
  const [messages, setMessages] = useState([]);
//   const [typingStatus, setTypingStatus] = useState('');
  const lastmessages = useRef(null);

  useEffect(() => {
    socket.on('messageResponse', (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  useEffect(() => {
    
    lastmessages.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat">
      <ChatBar socket={socket} />
      <div className="chat__main">
        <ChatBody messages={messages} lastMessageRef={lastmessages} />
        <ChatFooter socket={socket} />
      </div>
    </div>
  );
};

export default ChatPage;