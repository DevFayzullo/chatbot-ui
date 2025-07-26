// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import ChatWindow from './components/ChatWindow';
import ButtonGroup from './components/ButtonGroup';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salom! Yordam kerakmi?' }
  ]);
  const [dark, setDark] = useState(false);
  const containerRef = useRef(null);

  // Scroll to bottom when new message added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`${dark ? 'dark' : ''} w-full h-screen bg-gray-100 dark:bg-gray-900 transition-colors`}>
      <div className="flex flex-col h-full max-w-md mx-auto border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <header className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white dark:bg-gray-800">
          <h1 className="text-lg font-bold">ChatBot UI 🤖</h1>
          <button
            onClick={() => setDark(!dark)}
            className="text-xs px-3 py-1 rounded bg-white text-gray-800 dark:bg-gray-600 dark:text-white shadow hover:opacity-80"
          >
            {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
          </button>
        </header>

        <div ref={containerRef} className="flex-1 overflow-y-auto">
          <ChatWindow messages={messages} />
        </div>

        <ButtonGroup setMessages={setMessages} />
      </div>
    </div>
  );
}
