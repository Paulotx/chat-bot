import axios from "axios";

const openai = axios.create({
  baseURL: "https://api.openai.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPEN_AI_KEY}`,
    "Content-Type": "application/json",
  },
});

export { openai };
