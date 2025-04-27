"use client";

import { useState, KeyboardEvent } from "react";
import { RiSendPlaneLine } from "react-icons/ri";

import { useChatStore } from "@/store/useChatStore";
import { ChatMessage, getAIResponse } from "@/service/getAIResponse";

export const ChatFooter = () => {
  const [textMessage, setTextMessage] = useState("");

  const viewportWidth = window.innerWidth;

  const { addMessage, messages, chatSubject, setIsLoading, isFinished } =
    useChatStore();

  const handleSendMessage = async () => {
    if (textMessage.trim() === "") return;

    addMessage({
      id: crypto.randomUUID(),
      message: textMessage.trim(),
      isMine: true,
    });

    setTextMessage("");
    setIsLoading(true);

    try {
      const apiMessages: ChatMessage[] = messages.map((msg) => ({
        role: msg.isMine ? "user" : "system",
        content: msg.message,
      }));

      const response = await getAIResponse(
        [...apiMessages, { role: "user", content: textMessage.trim() }],
        chatSubject
      );

      addMessage({
        id: crypto.randomUUID(),
        message: response,
        isMine: false,
      });
    } catch (error) {
      console.error("Erro ao obter resposta:", error);
      addMessage({
        id: crypto.randomUUID(),
        message: "Desculpe, ocorreu um erro ao processar sua mensagem.",
        isMine: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center h-28 w-full border-t-1 border-t-gray-600 rounded-b-3xl">
      <div className="flex items-center gap-2 md:gap-6 w-full px-6">
        <div className="flex-1 mt-2">
          <textarea
            rows={2}
            value={textMessage}
            disabled={isFinished}
            placeholder={isFinished ? "Chat finalizado" : "Digite sua pergunta"}
            onChange={(e) => setTextMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            className="border-1 border-gray-600 w-full resize-none outline-0 p-3 rounded-2xl disabled:bg-gray-800 disabled:cursor-not-allowed transition duration-200"
          />
        </div>

        <button
          className="bg-gray-200 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity duration-200"
          onClick={handleSendMessage}
        >
          <RiSendPlaneLine
            color="#222326"
            size={viewportWidth >= 768 ? 32 : 20}
            className="mr-1 mt-1"
          />
        </button>
      </div>
    </div>
  );
};
