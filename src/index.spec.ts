import { startGame, validateGameSettings } from "./index";

describe("test application runs successfully", () => {
  it("Validate game settings - should return true for game to stop", () => {
    expect(startGame()).toBe(true);
  });
  it("Validate number of players - should return true for game to start", () => {
    expect(validateGameSettings(5)).toBe(true);
  });
  it("Validate number of players - should return false for game to stop", () => {
    expect(validateGameSettings(-1)).toBe(false);
  });
  it("Validate number of players - should return false for game to stop", () => {
    expect(validateGameSettings(14)).toBe(false);
  });
  it("Validate number of players - should return false for game to stop", () => {
    expect(validateGameSettings(0)).toBe(false);
  });
});

// Mock generate players function to make sure we can test all rule set reliably
