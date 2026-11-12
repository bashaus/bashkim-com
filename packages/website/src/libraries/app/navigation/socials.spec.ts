import { Locale } from "@/i18n/locale/locale";

import {
  getSocialsGitHubPath,
  getSocialsLinkedInPath,
  getSocialsMediumPath,
  getSocialsPath,
  getSocialsStackOverflowPath,
} from "./socials";

describe("getSocialsPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSocialsPath({ locale });
    expect(path).toBe("/en/socials");
  });

  it("should return localized path", () => {
    const locale = Locale.ES;
    const path = getSocialsPath({ locale });
    expect(path).toBe("/es/socials");
  });
});

describe("getSocialsGitHubPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSocialsGitHubPath({ locale });
    expect(path).toBe("/en/socials/github");
  });
});

describe("getSocialsMediumPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSocialsMediumPath({ locale });
    expect(path).toBe("/en/socials/medium");
  });
});

describe("getSocialsLinkedInPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSocialsLinkedInPath({ locale });
    expect(path).toBe("/en/socials/linked-in");
  });
});

describe("getSocialsStackOverflowPath", () => {
  it("should return path", () => {
    const locale = Locale.EN;
    const path = getSocialsStackOverflowPath({ locale });
    expect(path).toBe("/en/socials/stack-overflow");
  });
});
