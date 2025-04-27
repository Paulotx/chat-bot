import { create } from "zustand";

interface Message {
  id: string;
  message: string;
  isMine: boolean;
}

type ChatStore = {
  chatSubject: string;
  messages: Message[];
  isLoading: boolean;
  isFinished: boolean;
  addMessage: (message: Message) => void;
  resetMessages: () => void;
  setSubject: (subject: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  finishedChat: () => void;
};

export const useChatStore = create<ChatStore>((set) => ({
  chatSubject: "",
  messages: [],
  isLoading: false,
  isFinished: false,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  resetMessages: () =>
    set(() => ({ messages: [], isLoading: false, isFinished: false })),
  setSubject: (subject) => set(() => ({ chatSubject: subject })),
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  finishedChat: () => set(() => ({ isFinished: true })),
}));
