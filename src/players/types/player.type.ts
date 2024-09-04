import { Card } from "../../cards/types/card.types";

export type Players = {
  [name: string]: {
    cards: Card[];
  };
};
