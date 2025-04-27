"use client";

import Link from "next/link";
import { RiRobot2Line } from "react-icons/ri";

import { useChatStore } from "@/store/useChatStore";
import { getGoodbyeMessage } from "@/helpers/getGoodbyeMessage";

export const ChatHeader = () => {
  const { addMessage, chatSubject, finishedChat, isFinished } = useChatStore();

  const handleAddFinishMessage = () => {
    addMessage({
      id: crypto.randomUUID(),
      message: getGoodbyeMessage(chatSubject),
      isMine: false,
    });

    finishedChat();
  };

  return (
    <div className="flex items-center justify-between rounded-t-3xl py-4 h-20 w-full px-6 border-b-1 border-b-gray-600">
      <div className="flex items-center gap-5">
        <RiRobot2Line color="#ededed" size={32} />
        <span className="text-gray-200 text-lg font-bold tracking-widest">
          CHATBOT
        </span>
      </div>

      <div className="flex gap-3 items-center h-full">
        {!isFinished && (
          <button
            onClick={handleAddFinishMessage}
            className="bg-red-500 py-1 px-3 rounded-md cursor-pointer"
          >
            Finalizar
          </button>
        )}

        <Link
          href="/"
          className="bg-green-500 py-1 px-3 rounded-md cursor-pointer"
        >
          {isFinished ? "Iniciar outra conversa" : "Alterar Tema"}
        </Link>
      </div>
    </div>
  );
};
