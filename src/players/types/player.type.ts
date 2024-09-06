import { Card } from "../../cards/types/card.types";

export type PlayersAndCardInfo = {
  [name: string]: {
    cards: Card[];
  };
};
