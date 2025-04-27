export const getWelcomeMessage = (chatSubject: string): string => {
  const welcomeTemplates = [
    `Olá! Tudo bem? Hoje vamos conversar sobre ${chatSubject}. O que você gostaria de saber?`,
    `Seja bem-vindo! Estou aqui para te ajudar com ${chatSubject}. Por onde quer começar?`,
    `Oi! Que bom te ver por aqui. Vamos explorar juntos o tema ${chatSubject}. Qual sua dúvida?`,
    `Olá, tudo bem? Preparado para nossa conversa sobre ${chatSubject}? Como posso te ajudar hoje?`,
  ];

  return welcomeTemplates[Math.floor(Math.random() * welcomeTemplates.length)];
};
