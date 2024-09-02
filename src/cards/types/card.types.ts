export enum CardColour {
  Red = 0,
  Green,
  Blue,
}

export type Colour = "Red" | "Green" | "Blue";

export type Card = {
  Value: number;
  Colour: Colour;
};
