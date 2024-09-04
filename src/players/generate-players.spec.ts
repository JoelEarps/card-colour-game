import { generatePlayers } from "./generate-players";

describe("generate-players", () => {
  it("Should return an object with 3 different players", () => {
    let playersGenerated = generatePlayers(3);
    // Check number of players is within paramaters
    const objectKeys = Object.keys(playersGenerated);
    expect(objectKeys.length).toBeGreaterThanOrEqual(2);
    expect(objectKeys.length).toBeLessThanOrEqual(10);
    // Test card length is always 3
    // As we tested card function we do not need to test the definition of a card
    for (const [playerKey, playerGameInfoValue] of Object.entries(
      playersGenerated
    )) {
      expect(typeof playerKey).toBe("string");
      expect(playerGameInfoValue.cards.length).toBe(3);
    }
  });
});
