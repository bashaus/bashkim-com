import { Locale } from "@/i18n/locale/locale";

import {
  getAboutPath,
  getCookiesPath,
  getHomePath,
  getSourcePath,
} from "./pages";

describe("getHomePath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getHomePath({ locale });
    expect(path).toBe("/en");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getHomePath({ locale });
    expect(path).toBe("/es");
  });
});

describe("getAboutPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getAboutPath({ locale });
    expect(path).toBe("/en/about");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getAboutPath({ locale });
    expect(path).toBe("/es/about");
  });
});

describe("getCookiesPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getCookiesPath({ locale });
    expect(path).toBe("/en/cookies");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getCookiesPath({ locale });
    expect(path).toBe("/es/cookies");
  });
});

describe("getSourcePath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSourcePath({ locale });
    expect(path).toBe("/en/source");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getSourcePath({ locale });
    expect(path).toBe("/es/source");
  });
});
