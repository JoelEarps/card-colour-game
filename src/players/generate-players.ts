import { faker } from "@faker-js/faker";
import { Players } from "./types/player.type";
import { dealCards } from "../deal-cards/deal-cards";

export const generatePlayers = (noOfPlayers: number): Players => {
  let gamePlayers: Players = {};
  for (let i = 0; i < noOfPlayers; i++) {
    const playerName = faker.person.firstName();
    console.info(`Player: ${playerName} has joined the game`);
    gamePlayers[playerName] = { cards: dealCards() };
  }
  return gamePlayers;
};
