function MessageBubble({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex w-full ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`rounded-2xl px-4 py-3 text-sm leading-relaxed break-words ${
          isUser
            ? "max-w-[75%] bg-blue-600 text-white"
            : "max-w-[90%] bg-slate-800 text-slate-100"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default MessageBubble;