export const getGoodbyeMessage = (chatSubject: string): string => {
  const goodbyeMessages = [
    `Foi ótimo conversar sobre ${chatSubject} com você! Até a próxima.`,
    `Encerrando nosso papo sobre ${chatSubject}. Se precisar de mais algo, é só chamar!`,
    `Espero que tenha ajudado com ${chatSubject}. Volte sempre!`,
    `Até logo! Foi um prazer falar de ${chatSubject} com você.`,
    `Chat encerrado. Bons jogos e ótimas conquistas no mundo de ${chatSubject}!`,
    `Nosso tempo falando sobre ${chatSubject} chegou ao fim. Abraço!`,
  ];

  return goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];
};
