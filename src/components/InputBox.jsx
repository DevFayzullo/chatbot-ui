import React, { useState } from "react";

const staticReplies = {
  hello: "Hello! How can I help you today?",
  services:
    "We offer the following services: ChatBot, Portfolio Design, Reels Editing.",
  contact: "You can reach us at +998 90 123 45 67",
};

export default function InputBox({ setMessages }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    const lowerInput = userMessage.toLowerCase();

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userMessage },
      { sender: "bot", text: "Typing...", isTyping: true },
    ]);

    setInput("");

    setTimeout(() => {
      const reply =
        staticReplies[lowerInput] || "Sorry, I don't understand that yet. :)";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: "bot", text: reply };
        return updated;
      });
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-sm outline-none focus:ring-2 focus:ring-blue-400 dark:text-white"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
        Send
      </button>
    </div>
  );
}
