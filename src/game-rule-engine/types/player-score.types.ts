import { Colour } from "../../cards/types/card.types";

export type PlayerScores = {
  [name: string]: number;
};

export type PlayerColours = {
  [name: string]: Set<Colour>;
};

export type PlayerNumbers = {
  [name: string]: Set<number>;
};
