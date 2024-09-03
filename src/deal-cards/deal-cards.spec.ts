import { dealCards } from "./deal-cards";

describe("Deal Cards", () => {
  it("Should deal valid cards", () => {
    const testPlayerCards = dealCards();
    expect(testPlayerCards.length).toBe(3);
  });
});
