import { useState } from "react";
import { getCurrentPage } from "../../services/chromeApi";
import { useChatStore } from "../../store/chatStore";

function ContextCard() {
  const [loading, setLoading] = useState(false);

  const chats = useChatStore(
    (state) => state.chats
  );

  const currentChatId = useChatStore(
    (state) => state.currentChatId
  );

  const setChatContext = useChatStore(
    (state) => state.setChatContext
  );

  const currentChat = chats.find(
    (chat) => chat.id === currentChatId
  );

  const pageData = currentChat?.context;

  const handleLoadPage = async () => {
    try {
      setLoading(true);

      const data = await getCurrentPage();

      setChatContext(data);
    } catch (error) {
      console.error(error);

      alert(
        "Could not access this page."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!pageData) {
    return (
      <div className="mx-2 mt-2 rounded-xl border border-slate-800 bg-slate-900 p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">
              No Context
            </p>

            <p className="text-xs text-slate-400">
              Load current page
            </p>
          </div>

          <button
            onClick={handleLoadPage}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-3 py-2 text-xs hover:bg-blue-700"
          >
            {loading ? "..." : "Load"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-2 mt-2 rounded-xl border border-slate-800 bg-slate-900 p-3">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
          <h2 className="line-clamp-2 break-words text-sm font-semibold">
            {pageData.title}
          </h2>

          <p className="mt-1 truncate text-xs text-slate-400">
            {pageData.url}
          </p>
        </div>

        <button
          onClick={handleLoadPage}
          disabled={loading}
          className="rounded-lg bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
        >
          ↻
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {pageData?.context?.hasCode && (
          <span className="rounded bg-blue-900 px-2 py-1 text-[10px]">
            Code
          </span>
        )}

        {pageData?.context?.hasImages && (
          <span className="rounded bg-green-900 px-2 py-1 text-[10px]">
            Images
          </span>
        )}

        {pageData?.context?.hasMedia && (
          <span className="rounded bg-purple-900 px-2 py-1 text-[10px]">
            Media
          </span>
        )}

        <span className="rounded bg-slate-800 px-2 py-1 text-[10px]">
          {pageData?.context?.wordCount || 0} words
        </span>
      </div>
    </div>
  );
}

export default ContextCard;