// For rule gen can we create a type that has a function and a name that validates the rules i.e. iterate through the enum.
import { GameEngine } from "./game-rule-engine/game-rule-engine";
import { generatePlayers } from "./players/generate-players";

// Could use faker to generate random number of players but for ease of seeing the results, 3 was chosen
const NUMBER_OF_PLAYERS = 3;

export const startGame = () => {
  console.log("Hello , starting the Card Game now");
  validateGameSettings(NUMBER_OF_PLAYERS);
  const playerInfoAndCards = generatePlayers(NUMBER_OF_PLAYERS);
  const gameRuleEngine = new GameEngine(playerInfoAndCards);
  gameRuleEngine.announceWinner();
  return true;
};

export const validateGameSettings = (noOfPlayers: number) => {
  // This way max cards cannot exceed 30
  if (noOfPlayers > 10 || noOfPlayers < 2) {
    console.error("Invalid number of players - exiting game...");
    return false;
  } else {
    console.info("Valid number of players, continuing");
    return true;
  }
};

startGame();
