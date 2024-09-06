export enum GameRules {
  THREE_COLOURS_COMBO = "three_colours_matching",
  THREE_VALUE_COMBO = "three_value_combo",
  PAIR_VALUE_COMBO = "two_pair_combo",
}

// To Avoid Using for loops within for loops I created a callback function to declare an action,
// actions can now be passed and therefore not always have to be add
export type ruleEffectCallback = (n: number, player: string) => any;

export type GameRulesEffect = {
  name: GameRules;
  rule: (ruleCallback: ruleEffectCallback, pointsValue: number) => void;
  effect: ruleEffectCallback;
  pointsValue: number;
};
