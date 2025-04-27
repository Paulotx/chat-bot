import { ChatBody } from "./components/chat-body";
import { ChatHeader } from "./components/chat-header";
import { ChatFooter } from "./components/chat-footer";

export const Chat = () => {
  return (
    <div className="w-full h-full md:w-[80%] md:h-[75%] flex flex-col md:rounded-3xl md:border-1 md:border-gray-600 bg-gray-700  md:shadow-lg">
      <ChatHeader />

      <ChatBody />

      <ChatFooter />
    </div>
  );
};
