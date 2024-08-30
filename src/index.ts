// enum CardColour {
//   RED = "red",
//   GREEN = "green",
//   BLUE = "blue",
// }

// type Card = {
//   Value: number;
//   Colour: CardColour;
// };

// const createCard = (): Card => {
//   const enumPosition = Math.random(0, 4);
//   return {
//     Value: Math.random(0, 10),
//     Colour: Math.random(0, 4),
//   };
// };

// // Scenario 1: Pass in 11, 1, -4, 6: fail, fail, fail, pass
// const dealCards = (noOfPlayer: number) => {
//   // fail if number of players exceeds 10 or is less than 2
//   if (noOfPlayers > 10 || noOfPlayers < 2) {
//     return false;
//   }
// };

export const startGame = () => {
  console.log("Hello , starting the Card Game now");
  return true;
};
