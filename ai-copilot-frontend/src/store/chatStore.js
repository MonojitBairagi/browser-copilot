import { create } from "zustand";

const welcomeMessage = {
  id: 1,
  role: "assistant",
  content:
    "Welcome to AI Browser Copilot. Load a page and ask me anything.",
};

export const useChatStore = create((set) => ({
  currentChatId: 1,

  chats: [
    {
      id: 1,
      title: "New Chat",

      context: null,

      messages: [welcomeMessage],
    },
  ],

  createChat: () =>
    set((state) => {
      const id = Date.now();

      const newChat = {
        id,

        title: "New Chat",

        context: null,

        messages: [
          {
            id: id + 1,
            role: "assistant",
            content:
              "Welcome to AI Browser Copilot. Load a page and ask me anything.",
          },
        ],
      };

      return {
        chats: [newChat, ...state.chats],
        currentChatId: id,
      };
    }),

  setCurrentChat: (id) =>
    set({
      currentChatId: id,
    }),

  setChatContext: (context) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === state.currentChatId
          ? {
              ...chat,
              context,
            }
          : chat
      ),
    })),

  addMessage: (message) =>
    set((state) => ({
      chats: state.chats.map((chat) =>
        chat.id === state.currentChatId
          ? {
              ...chat,
              messages: [...chat.messages, message],
            }
          : chat
      ),
    })),
}));