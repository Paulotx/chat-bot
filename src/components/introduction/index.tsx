"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useChatStore } from "@/store/useChatStore";
import { getWelcomeMessage } from "@/helpers/getWelcomeMessage";
import { getGreetingMessage } from "@/helpers/getGreetingMessage";

export const Introduction = () => {
  const [themeText, setThemeText] = useState("");

  const { push } = useRouter();

  const { setSubject, addMessage, resetMessages } = useChatStore();

  const handleThemeSubmit = () => {
    if (themeText.trim() === "") return;

    resetMessages();

    setSubject(themeText.trim());

    addMessage({
      id: crypto.randomUUID(),
      message: getWelcomeMessage(themeText.trim()),
      isMine: false,
    });

    setThemeText("");

    push("/chat");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleThemeSubmit();
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] py-8 md:py-0 md:h-[75%] px-4 flex items-center justify-center rounded-3xl border-1 bg-gray-700 border-gray-600 shadow-lg">
      <div className="mx-auto">
        <p className="text-xl md:text-3xl text-center tracking-wide font-medium text-gray-200">
          {getGreetingMessage()}! Seja muito bem-vindo.
        </p>

        <p className="text-center text-md md:text-lg text-gray-200 mt-1 md:mt-2">
          Informe um tema para começarmos a conversa.
        </p>

        <input
          type="text"
          value={themeText}
          onChange={(e) => setThemeText(e.target.value.toUpperCase())}
          onKeyDown={handleKeyDown}
          className="border-1 border-gray-600 w-full resize-none outline-0 p-2 md:p-3 rounded-lg mt-6 md:mt-12 text-center"
        />

        <button
          onClick={handleThemeSubmit}
          className="bg-blue-400 w-full py-2 md:py-3 rounded-lg cursor-pointer mt-4 hover:opacity-75 transition-opacity duration-200"
        >
          Começar
        </button>
      </div>
    </div>
  );
};
