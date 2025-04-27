"use client";

import { useState } from "react";
import Link from "next/link";
import { RiRobot2Line } from "react-icons/ri";

import { useChatStore } from "@/store/useChatStore";
import { getGoodbyeMessage } from "@/helpers/getGoodbyeMessage";

import { ConfirmDialog } from "@/components/confirm-dialog";

export const ChatHeader = () => {
  const [showDialog, setShowDialog] = useState(false);

  const { addMessage, chatSubject, finishedChat, isFinished } = useChatStore();

  const handleConfirm = () => {
    addMessage({
      id: crypto.randomUUID(),
      message: getGoodbyeMessage(chatSubject),
      isMine: false,
    });
    finishedChat();
    setShowDialog(false);
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center md:justify-between rounded-t-3xl py-4 md:h-20 w-full px-6 border-b-1 border-b-gray-600">
        <div className="flex items-center gap-5">
          <RiRobot2Line color="#ededed" size={32} />
          <span className="text-gray-200 text-lg font-bold tracking-widest">
            CHATBOT
          </span>
        </div>

        <div className="flex gap-3 items-center h-full">
          {!isFinished && (
            <button
              onClick={() => setShowDialog(true)}
              className="bg-red-500 hover:bg-red-600 py-1 px-3 rounded-md cursor-pointer transition-colors"
            >
              Finalizar
            </button>
          )}

          <Link
            href="/"
            className="bg-green-500 hover:bg-green-600 py-1 px-3 rounded-md cursor-pointer transition-colors"
          >
            {isFinished ? "Iniciar outra conversa" : "Alterar Tema"}
          </Link>
        </div>
      </div>

      <ConfirmDialog
        isOpen={showDialog}
        message={`Tem certeza que deseja finalizar o chat sobre ${chatSubject}?`}
        onConfirm={handleConfirm}
        onCancel={() => setShowDialog(false)}
      />
    </>
  );
};
