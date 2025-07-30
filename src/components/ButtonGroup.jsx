const predefinedResponses = {
  "Salom": "Salom! Qanday yordam bera olaman?",
  "Xizmatlar": "Biz quyidagi xizmatlarni taklif qilamiz: ChatBot, Portfolio yaratish, Reels dizayn.",
  "Aloqa": "Biz bilan bog‘laning: +998 90 123 45 67"
};

export default function ButtonGroup({ setMessages }) {
  const handleClick = (text) => {
    setMessages(prev => [
      ...prev,
      { sender: 'user', text },
      { sender: 'bot', text: 'Typing...', isTyping: true }
    ]);

    setTimeout(() => {
      setMessages(prev => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          sender: 'bot',
          text: predefinedResponses[text] || "Kechirasiz, bu mavzuda javob topilmadi."
        };
        return updated;
      });
    }, 700);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 flex flex-wrap gap-3 border-t border-gray-200 dark:border-gray-700">
      {Object.keys(predefinedResponses).map((text, i) => (
        <button
          key={i}
          onClick={() => handleClick(text)}
          className="px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all text-sm"
        >
          {text}
        </button>
      ))}
    </div>
  );
}