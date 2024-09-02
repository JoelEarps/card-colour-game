import { Card, CardColour, Colour } from "./types/card.types";
import { faker } from "@faker-js/faker";

export const createCard = (): Card => {
  // Use Faker as it will come in handy with player names, it also has randomisation of numbers therefore is useful here
  // Rather than raw maths - if in the future this dep becomes a problem it can easily be removed
  const cardVal = faker.number.int({ min: 0, max: 10 });
  const cardColour = CardColour[faker.number.int({ min: 0, max: 2 })];
  // console.log(CardColour[faker.number.int({ min: 0, max: 2 })]);
  console.log(`Creating Card with Value: ${cardVal} and Colour: ${cardColour}`);
  return {
    Value: cardVal,
    Colour: cardColour as Colour,
  };
};
