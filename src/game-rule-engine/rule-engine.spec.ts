import { GameEngine } from "./rule-engine";
import gameInfoPlayerCards from "../../__fixtures__/gamePlayerCardInfo.json";
import { Players } from "../players/types/player.type";

describe("GameEngineCheck", () => {
  let testClass: GameEngine;

  beforeEach(() => {
    testClass = new GameEngine(gameInfoPlayerCards as Players);
    console.log(gameInfoPlayerCards);
  });
  it("Check triple value rule", () => {
    testClass.createRules();
    testClass.validateRuleSet();
  });
});
