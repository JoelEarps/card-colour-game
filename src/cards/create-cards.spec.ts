import { createCard } from "./create-cards";
import { Colour } from "./types/card.types";

describe("createCards", () => {
  it("Should return a valid playing card", () => {
    const testCard = createCard();
    expect(testCard.Colour).toMatch(/^(Red|Green|Blue)$/);
    expect(testCard.Value).toBeGreaterThanOrEqual(0);
    expect(testCard.Value).toBeLessThanOrEqual(10);
  });
});
