export const getWelcomeMessage = (topic: string): string => {
  const welcomeTemplates = [
    `Olá! Tudo bem? Hoje vamos conversar sobre ${topic}. O que você gostaria de saber?`,
    `Seja bem-vindo! Estou aqui para te ajudar com ${topic}. Por onde quer começar?`,
    `Oi! Que bom te ver por aqui. Vamos explorar juntos o tema ${topic}. Qual sua dúvida?`,
    `Olá, tudo bem? Preparado para nossa conversa sobre ${topic}? Como posso te ajudar hoje?`,
  ];

  return welcomeTemplates[Math.floor(Math.random() * welcomeTemplates.length)];
};
