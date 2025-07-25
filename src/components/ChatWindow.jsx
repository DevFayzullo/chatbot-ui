import React from 'react';

export default function ChatWindow({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`max-w-xs px-4 py-2 rounded-lg shadow ${
            msg.sender === 'user' ? 'bg-blue-500 text-white self-end ml-auto' : 'bg-white text-gray-800'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
