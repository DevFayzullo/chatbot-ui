import React, { useState, useEffect, useRef } from 'react';
import ChatWindow from './components/ChatWindow';
import ButtonGroup from './components/ButtonGroup';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salom! Yordam kerakmi?' }
  ]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
  <div className="w-full h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
    <div className="flex align-items flex-col h-[95vh] w-full max-w-md mx-auto rounded-2xl shadow-xl overflow-hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="px-4 py-3 bg-blue-600 text-white dark:bg-gray-800">
        <h1 className="text-xl font-bold">ChatBot UI</h1>
      </header>

      <div ref={containerRef} className="flex-1 overflow-y-auto">
        <ChatWindow messages={messages} />
      </div>

      <ButtonGroup setMessages={setMessages} />
    </div>
  </div>
);

}
