import { startGame } from "./index";

describe("test application runs successfully", () => {
  it("Should return true", () => {
    expect(startGame()).toBe(true);
  });
});
