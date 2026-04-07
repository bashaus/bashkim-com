import {
  getAboutPath,
  getCookiesPath,
  getHomePath,
  getSourcePath,
} from "./pages";

describe("getHomePath()", () => {
  it("should return path", () => {
    const path = getHomePath();
    expect(path).toBe("/");
  });
});

describe("getAboutPath()", () => {
  it("should return path", () => {
    const path = getAboutPath();
    expect(path).toBe("/about");
  });
});

describe("getCookiesPath()", () => {
  it("should return path", () => {
    const path = getCookiesPath();
    expect(path).toBe("/cookies");
  });
});

describe("getSourcePath()", () => {
  it("should return path", () => {
    const path = getSourcePath();
    expect(path).toBe("/source");
  });
});
