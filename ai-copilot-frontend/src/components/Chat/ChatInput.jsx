import { useState } from "react";
import { useChatStore } from "../../store/chatStore";

function ChatInput() {
  const [message, setMessage] = useState("");

  const addMessage = useChatStore(
    (state) => state.addMessage
  );

  const handleSend = () => {
    if (!message.trim()) return;

    addMessage({
      id: Date.now(),
      role: "user",
      content: message,
    });

    setMessage("");

    setTimeout(() => {
      addMessage({
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Backend connection will be added soon.",
      });
    }, 400);
  };

  return (
    <div className="border-t border-slate-800 p-3">
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Ask anything..."
          className="flex-1 rounded-xl bg-slate-800 px-4 py-3 text-sm outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInput;