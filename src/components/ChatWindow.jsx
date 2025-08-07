export default function ChatWindow({ messages }) {
  return (
    <div className="flex flex-col p-4 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`relative px-4 py-2 rounded-xl max-w-[80%] text-sm shadow-md break-words whitespace-pre-wrap
            ${
              msg.sender === "user"
                ? "bg-blue-600 text-white self-end"
                : "bg-gray-200 text-gray-900 self-start dark:bg-gray-700 dark:text-white"
            }
          `}>
          <p>{msg.text}</p>
          <span className="text-[10px] mt-1 block text-right opacity-60">
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      ))}
    </div>
  );
}
