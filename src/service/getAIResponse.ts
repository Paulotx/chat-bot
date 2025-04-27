import { AxiosError, AxiosResponse } from "axios";
import { openai } from "./api";

interface OpenAIChoice {
  message: {
    role: string;
    content: string;
  };
  index: number;
  finish_reason: string;
}

interface OpenAIUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

interface OpenAIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: OpenAIChoice[];
  usage: OpenAIUsage;
}

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

interface OpenAIRequestParams {
  model: string;
  messages: ChatMessage[];
}

export const getAIResponse = async (
  messages: ChatMessage[],
  chatSubject: string
): Promise<string> => {
  try {
    const response: AxiosResponse<OpenAIResponse> = await openai.post(
      "/chat/completions ",
      {
        model: "gpt-4o-mini",
        store: false,
        messages: [
          {
            role: "system",
            content: `Você é um assistente especializado em ${chatSubject}.
              - O foco principal é ${chatSubject}
              - Se for COMPLETAMENTE fora do tema ${chatSubject}, avise
              - Mantenha respostas curtas e precisas`,
          },

          ...messages,
        ],
      } as OpenAIRequestParams
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "Erro na API OpenAI:",
      axiosError.response?.data || axiosError.message
    );
    return "Desculpe, estou com dificuldades técnicas. Tente novamente mais tarde.";
  }
};
