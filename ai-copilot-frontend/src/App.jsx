import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ContextCard from "./components/Context/ContextCard";
import ChatWindow from "./components/Chat/ChatWindow";
import ChatInput from "./components/Chat/ChatInput";

function App() {
  return (
    <div className="flex h-[650px] w-[500px] bg-slate-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Header />

        <ContextCard />

        <ChatWindow />

        <ChatInput />
      </div>
    </div>
  );
}

export default App;