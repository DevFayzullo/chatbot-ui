import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ButtonGroup from './components/ButtonGroup';

export default function App() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Salom! Yordam kerakmi?' }
  ]);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="text-center text-xl font-bold p-4 bg-blue-600 text-white shadow">
        ChatBot UI 🤖
      </header>

      <ChatWindow messages={messages} />

      <ButtonGroup setMessages={setMessages} />
    </div>
  );
}
