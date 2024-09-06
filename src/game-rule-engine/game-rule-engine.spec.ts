import { GameEngine } from "./game-rule-engine";
import gameInfoPlayerCards from "../../__fixtures__/gamePlayerCardInfo.json";
import { PlayersAndCardInfo } from "../players/types/player.type";

describe("GameEngineCheck", () => {
  let testClass: GameEngine;
  it("Check triple value rule", () => {
    testClass = new GameEngine(gameInfoPlayerCards as PlayersAndCardInfo);
    testClass.announceWinner();
  });
});
