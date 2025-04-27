"use client";

import { useEffect, useRef, useCallback } from "react";

import { Message } from "./chat-message";
import { useChatStore } from "@/store/useChatStore";

import { Loading } from "@/components/loading";

export const ChatBody = () => {
  const { messages, isLoading } = useChatStore();

  const isAutoScrollEnabled = useRef(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = "smooth") => {
    if (messagesEndRef.current && isAutoScrollEnabled.current) {
      messagesEndRef.current.scrollIntoView({
        behavior,
        block: "nearest",
      });
    }
  }, []);

  // Scroll Principal
  useEffect(() => {
    const isFirstLoad = messages.length <= 1;
    scrollToBottom(isFirstLoad ? "auto" : "smooth");
  }, [messages, scrollToBottom]);

  // Scroll Manual
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const threshold = 100;
      const isNearBottom =
        container.scrollTop + container.clientHeight + threshold >=
        container.scrollHeight;

      isAutoScrollEnabled.current = isNearBottom;
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 flex flex-col gap-6 p-6 overflow-y-auto custom-scrollbar"
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          message={message.message}
          isMine={message.isMine}
        />
      ))}

      {isLoading && <Loading />}

      <div ref={messagesEndRef} aria-hidden="true" className="h-px" />
    </div>
  );
};
