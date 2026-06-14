import { useEffect, useRef } from "react";
import { useChatStore } from "../../store/chatStore";
import MessageBubble from "./MessageBubble";

function ChatWindow() {
  const bottomRef = useRef(null);

  const chats = useChatStore(
    (state) => state.chats
  );

  const currentChatId = useChatStore(
    (state) => state.currentChatId
  );

  const currentChat = chats.find(
    (chat) => chat.id === currentChatId
  );

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [currentChat?.messages]);

  return (
    <div className="flex-1 overflow-y-auto px-3 py-4">
      <div className="flex flex-col gap-3">
        {currentChat?.messages?.map(
          (message) => (
            <MessageBubble
              key={message.id}
              role={message.role}
              content={message.content}
            />
          )
        )}

        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default ChatWindow;