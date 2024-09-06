import { faker } from "@faker-js/faker";
import { PlayersAndCardInfo } from "./types/player.type";
import { dealCards } from "../deal-cards/deal-cards";

export const generatePlayers = (noOfPlayers: number): PlayersAndCardInfo => {
  let gamePlayersAndCardInfo: PlayersAndCardInfo = {};
  for (let i = 0; i < noOfPlayers; i++) {
    const playerName = faker.person.firstName();
    console.info(`Player: ${playerName} has joined the game`);
    gamePlayersAndCardInfo[playerName] = { cards: dealCards() };
  }
  return gamePlayersAndCardInfo;
};
