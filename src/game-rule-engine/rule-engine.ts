import { Players } from "../players/types/player.type";

enum GameRules {
  THREE_COLOURS_COMBO = "three_colours_matching",
  THREE_VALUE_COMBO = "three_value_combo",
  PAIR_VALUE_COMBO = "two_pair_combo",
}

type GameRulesEffect = {
  name: GameRules;
  rule: () => void;
  effect: () => void;
};

// Use of rule engine design pattern - very simple attempt due to complexity of the task
// Thought process - you can either have individual functions that run

type PlayerScores = {
  [name: string]: {
    winning_rules: GameRules[];
    points: number;
  };
};

export class GameEngine {
  public finalResults: undefined;
  private rules: GameRulesEffect[] = [];
  private playerScores: undefined;

  constructor(public playerInfoAndCards: Players) {}

  initialiseGameEngine() {}

  createRules() {
    const tripleValueRule: GameRulesEffect = {
      name: GameRules.THREE_COLOURS_COMBO,
      rule: this.checkForThreeCardsSameValue,
      effect: (): void => {},
    };
    const tripleColourRule: GameRulesEffect = {
      name: GameRules.THREE_COLOURS_COMBO,
      rule: this.checkForThreeCardsSameColour,
      effect: (): void => {},
    };
    const pairValueRule: GameRulesEffect = {
      name: GameRules.PAIR_VALUE_COMBO,
      rule: this.checkForPairCombo,
      effect: (): void => {},
    };
    this.rules.push(tripleValueRule, tripleColourRule, pairValueRule);
  }

  validateRuleSet() {
    console.log(this.rules.length);
    this.rules.forEach((element: GameRulesEffect) => {
      element.rule();
    });
  }

  checkForThreeCardsSameColour = (): void => {
    console.log("Checking for three cards the same colour");
  };

  // Could these two functions be combined rather than two seperate
  checkForThreeCardsSameValue = (): void => {
    console.log("Checking for three cards the same value");
  };
  checkForPairCombo = (): void => {
    console.log("Checking for two cards the same value");
  };
}
