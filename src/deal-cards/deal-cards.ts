import { createCard } from "../cards/create-cards";
import { Card } from "../cards/types/card.types";

export const dealCards = () => {
  // Number of cards is 3
  let playerCards: Card[] = [];
  for (let cardNumber = 0; cardNumber < 3; cardNumber++) {
    playerCards.push(createCard());
  }
  return playerCards;
};
