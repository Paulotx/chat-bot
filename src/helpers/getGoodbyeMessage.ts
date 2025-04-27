export const getGoodbyeMessage = (topic: string): string => {
  const goodbyeMessages = [
    `Foi ótimo conversar sobre ${topic} com você! Até a próxima.`,
    `Encerrando nosso papo sobre ${topic}. Se precisar de mais algo, é só chamar!`,
    `Espero que tenha ajudado com ${topic}. Volte sempre!`,
    `Até logo! Foi um prazer falar de ${topic} com você.`,
    `Chat encerrado. Bons jogos e ótimas conquistas no mundo de ${topic}!`,
    `Nosso tempo falando sobre ${topic} chegou ao fim. Abraço!`,
  ];

  return goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
};
