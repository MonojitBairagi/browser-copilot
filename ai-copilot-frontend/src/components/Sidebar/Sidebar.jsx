import { useChatStore } from "../../store/chatStore";

function Sidebar() {
  const chats = useChatStore((state) => state.chats);

  const currentChatId = useChatStore(
    (state) => state.currentChatId
  );

  const createChat = useChatStore(
    (state) => state.createChat
  );

  const setCurrentChat = useChatStore(
    (state) => state.setCurrentChat
  );

  return (
    <div className="flex w-[70px] flex-col border-r border-slate-800 bg-slate-900">
      <div className="p-2">
        <button
          onClick={createChat}
          className="flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-xl font-bold hover:bg-blue-700"
        >
          +
        </button>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto px-2">
        {chats.map((chat, index) => (
          <button
            key={chat.id}
            onClick={() =>
              setCurrentChat(chat.id)
            }
            className={`flex h-12 w-full items-center justify-center rounded-xl text-sm font-medium transition ${
              currentChatId === chat.id
                ? "bg-blue-600"
                : "bg-slate-800 hover:bg-slate-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;