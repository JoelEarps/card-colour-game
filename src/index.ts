// Use Faker to Generate random number of players

export const startGame = () => {
  console.log("Hello , starting the Card Game now");
  return true;
};

export const validateGameSettings = (noOfPlayers: number) => {
  if (noOfPlayers > 10 || noOfPlayers < 2) {
    console.error("Invalid number of players - exiting game...");
    return false;
  } else {
    console.info("Valid number of players, continuing");
    return true;
  }
};
