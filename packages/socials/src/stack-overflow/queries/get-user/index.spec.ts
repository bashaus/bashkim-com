import { getStackOverflowUser } from ".";

describe("getStackOverflowUser", () => {
  it("should parse the fixture", async () => {
    const response = await getStackOverflowUser();
    expect(response.badgeCounts.gold).toBe(2);
    expect(response.badgeCounts.silver).toBe(18);
    expect(response.badgeCounts.bronze).toBe(35);
    expect(response.reputation).toBe(1723);
  });
});
