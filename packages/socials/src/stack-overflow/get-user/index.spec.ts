import { getStackOverflowUser } from ".";
import fixture from "./fixture.json";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

afterEach(() => {
  warnSpy.mockClear();
  errorSpy.mockClear();
  logSpy.mockClear();
});

describe("getStackOverflowUser", () => {
  it("should parse the fixture", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => fixture,
    } as Response);

    const response = await getStackOverflowUser();
    expect(response.badgeCounts.gold).toBe(2);
    expect(response.badgeCounts.silver).toBe(18);
    expect(response.badgeCounts.bronze).toBe(35);
    expect(response.reputation).toBe(1723);
  });
});
