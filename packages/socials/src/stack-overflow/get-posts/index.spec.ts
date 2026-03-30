import { getStackOverflowPosts } from ".";
import fixture from "./fixture.json";

const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

afterEach(() => {
  warnSpy.mockClear();
  errorSpy.mockClear();
  logSpy.mockClear();
});

describe("getStackOverflowPosts", () => {
  it("should parse the fixture", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => fixture,
    } as Response);

    const response = await getStackOverflowPosts();
    expect(response).toHaveLength(10);
  });
});
