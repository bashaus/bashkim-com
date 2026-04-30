import { pathAsUrl } from "./path-as-url";

describe("pathAsUrl", () => {
  afterEach(() => {
    delete process.env["BASHKIM_BASE_HREF"];
  });

  it("should return a URL", () => {
    expect(pathAsUrl("/test")).toBe("https://www.bashkim.com/test");
  });

  it("should return fallback without base href", () => {
    expect(pathAsUrl("/test")).toBe("https://www.bashkim.com/test");
  });

  it("should use base href in env", () => {
    process.env["BASHKIM_BASE_HREF"] = "https://www.example.com";
    expect(pathAsUrl("/test")).toBe("https://www.example.com/test");
  });
});
