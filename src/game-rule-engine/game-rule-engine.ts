import { Colour } from "../cards/types/card.types";
import { PlayersAndCardInfo } from "../players/types/player.type";
import {
  GameRulesEffect,
  GameRules,
  ruleEffectCallback,
} from "./types/game-rule.types";
import {
  PlayerColours,
  PlayerNumbers,
  PlayerScores,
} from "./types/player-score.types";

export class GameEngine {
  public finalResults: undefined;
  private rules: GameRulesEffect[] = [];
  public playerScores: PlayerScores = {};
  private cardNumbers: PlayerNumbers = {};
  private cardColours: PlayerColours = {};

  constructor(public playerInfoAndCards: PlayersAndCardInfo) {
    this.initialiseGameEngine();
    this.createRules();
    this.validateRuleSet();
  }

  // Reason for this function is it allows the seperation of all colour rules and number based rules
  // Allowing for mutliple rules to be checked using the same dataset - rather than grabbing them every time
  private initialiseGameEngine() {
    for (const [player, cardInfo] of Object.entries(this.playerInfoAndCards)) {
      this.playerScores[player] = 0;
      let tempValueStore: number[] = [];
      let tempColourStore: Colour[] = [];
      cardInfo.cards.forEach((card) => {
        tempColourStore.push(card.Colour);
        tempValueStore.push(card.Value);
      });
      // use of sets here - can only have unique variables - so duplicates are removed
      // Therefore if a player has duplicate cards
      // Make rule logic a lot simpler - otherwise you could make them all arrays and and loop through - increasing Time (O log N) complexity
      this.cardColours[player] = new Set(tempColourStore);
      this.cardNumbers[player] = new Set(tempValueStore);
    }
  }

  public announceWinner = (): void => {
    let winningScore = -Infinity;
    let winningPlayer = "";

    for (const [player, score] of Object.entries(this.playerScores)) {
      console.log(`${player} had a score of: ${score}`);
      if (score > winningScore) {
        winningPlayer = player;
        winningScore = score;
      }
    }

    console.log(
      `!!!!!!!! Winner is ${winningPlayer}, with a score of ${winningScore} !!!!!!!!`
    );
  };

  // Add to ruleset here to increase rules use by Game Rule Engine
  private createRules() {
    const tripleValueRule: GameRulesEffect = {
      name: GameRules.THREE_COLOURS_COMBO,
      rule: this.checkForThreeCardsSameValue,
      effect: this.addToScore,
      pointsValue: 3,
    };
    const tripleColourRule: GameRulesEffect = {
      name: GameRules.THREE_COLOURS_COMBO,
      rule: this.checkForThreeCardsSameColour,
      effect: this.addToScore,
      pointsValue: 2,
    };
    const pairValueRule: GameRulesEffect = {
      name: GameRules.PAIR_VALUE_COMBO,
      rule: this.checkForPairCombo,
      effect: this.addToScore,
      pointsValue: 0.5,
    };
    this.rules.push(tripleValueRule, tripleColourRule, pairValueRule);
  }

  validateRuleSet() {
    this.rules.forEach((ruleItem: GameRulesEffect) => {
      ruleItem.rule(ruleItem.effect, ruleItem.pointsValue);
    });
  }

  private checkForThreeCardsSameColour = (
    callback: ruleEffectCallback,
    pointsValue: number
  ): void => {
    console.log("Checking for three cards the same colour");
    for (const [player, cardColourSet] of Object.entries(this.cardColours)) {
      if (cardColourSet.size == 1) {
        console.log(`${player} has three of the same colour card`);
        callback(pointsValue, player);
      } else {
        console.warn(`${player} has more than one colour card`);
      }
    }
  };

  // For checking value based rules, you could have it so the rules are grouped by value and colour, this way you could do all rule checks at once
  // This though defeats the purpose of the pattern where all the rules are seperate, grouping the rules might make it easier however this then becomes more difficult to follow
  // Given the simplicity of the game I have kept the seperate, as the number of rules expanded you could group the rules and have value based rules, colour based rule, special rules etc.
  private checkForThreeCardsSameValue = (
    callback: ruleEffectCallback,
    pointsValue: number
  ): void => {
    console.log("Checking for three cards the same value");
    for (const [player, cardNumberSet] of Object.entries(this.cardNumbers)) {
      if (cardNumberSet.size == 1) {
        console.log(`${player} has three of the same value card`);
        callback(pointsValue, player);
      } else {
        console.warn(`${player} has cards with more than one value`);
      }
    }
  };

  private checkForPairCombo = (
    callback: ruleEffectCallback,
    pointsValue: number
  ): void => {
    console.log("Checking for two cards the same value");
    for (const [player, cardNumberSet] of Object.entries(this.cardNumbers)) {
      if (cardNumberSet.size == 2) {
        console.log(`${player} has a pair of cards with the same value`);
        callback(pointsValue, player);
      } else {
        console.warn(`${player} has no pairs of cards with the same value`);
      }
    }
  };

  private addToScore = (points: number, player: string): void => {
    console.log(`Adding ${points} to ${player}'s total`);
    this.playerScores[player] = this.playerScores[player] + points;
  };
}
