import React from 'react';

const predefinedResponses = {
  "Salom": "Salom! Sizga qanday yordam bera olaman?",
  "Xizmatlar": "Biz quyidagi xizmatlarni taklif qilamiz: ChatBot, Portfolio yaratish, Reels dizayn.",
  "Aloqa": "Biz bilan bog‘laning: +998 90 123 45 67"
};

export default function ButtonGroup({ setMessages }) {
  const handleClick = (text) => {
    setMessages(prev => [
      ...prev,
      { sender: 'user', text },
      { sender: 'bot', text: predefinedResponses[text] || "Kechirasiz, bu bo‘yicha ma’lumot yo‘q." }
    ]);
  };

  return (
    <div className="bg-white p-4 flex flex-wrap gap-2 border-t">
      {Object.keys(predefinedResponses).map((text, i) => (
        <button
          key={i}
          onClick={() => handleClick(text)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {text}
        </button>
      ))}
    </div>
  );
}
