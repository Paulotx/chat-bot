import { ChatBody } from "./components/chat-body";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";

export const Chat = () => {
  return (
    <div className="w-[80%] h-[75%] flex flex-col rounded-3xl border-1 border-gray-600 bg-gray-700  shadow-lg">
      <ChatHeader />

      <ChatBody />

      <ChatFooter />
    </div>
  );
};
