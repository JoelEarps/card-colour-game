"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateGameSettings = exports.startGame = void 0;
// For rule gen can we create a type that has a function and a name that validates the rules i.e. iterate through the enum.
const game_rule_engine_1 = require("./game-rule-engine/game-rule-engine");
const generate_players_1 = require("./players/generate-players");
// Could use faker to generate random number of players but for ease of seeing the results, 3 was chosen
const NUMBER_OF_PLAYERS = 3;
const startGame = () => {
    console.log("Hello , starting the Card Game now");
    (0, exports.validateGameSettings)(NUMBER_OF_PLAYERS);
    const playerInfoAndCards = (0, generate_players_1.generatePlayers)(NUMBER_OF_PLAYERS);
    const gameRuleEngine = new game_rule_engine_1.GameEngine(playerInfoAndCards);
    gameRuleEngine.announceWinner();
    return true;
};
exports.startGame = startGame;
const validateGameSettings = (noOfPlayers) => {
    if (noOfPlayers > 10 || noOfPlayers < 2) {
        console.error("Invalid number of players - exiting game...");
        return false;
    }
    else {
        console.info("Valid number of players, continuing");
        return true;
    }
};
exports.validateGameSettings = validateGameSettings;
(0, exports.startGame)();
