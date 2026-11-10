import { geolocation } from "@vercel/functions";
import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Locale } from "../locale";
import { getLocaleFromVercel } from "./vercel";

vi.mock("@vercel/functions", () => ({
  geolocation: vi.fn(),
}));

describe("getLocaleFromVercel", () => {
  const mockRequest = {} as NextRequest;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return null when country is missing or empty", () => {
    vi.mocked(geolocation).mockReturnValue({});
    expect(getLocaleFromVercel(mockRequest)).toBeNull();
    expect(geolocation).toHaveBeenCalledWith(mockRequest);
  });

  describe("country-only matches", () => {
    it.each([
      { country: "AD", expected: Locale.CAT }, // Andorra
      { country: "ES", expected: Locale.ES }, // Spain
    ])("should return $expected for $country", ({ country, expected }) => {
      vi.mocked(geolocation).mockReturnValue({ country });
      expect(getLocaleFromVercel(mockRequest)).toBe(expected);
    });

    it("should return null for an unmapped country", () => {
      vi.mocked(geolocation).mockReturnValue({ country: "DE" });
      expect(getLocaleFromVercel(mockRequest)).toBeNull();
    });
  });

  describe("country + countryRegion matches and fallbacks", () => {
    it.each([
      { country: "ES", countryRegion: "CA", expected: Locale.CAT }, // Catalonia
      { country: "ES", countryRegion: "IB", expected: Locale.CAT }, // Islas Baleares
      { country: "ES", countryRegion: "PM", expected: Locale.CAT }, // Palma de Mallorca
    ])(
      "should prioritize specific region locale ($expected) for $country-$countryRegion",
      ({ country, countryRegion, expected }) => {
        vi.mocked(geolocation).mockReturnValue({ country, countryRegion });
        expect(getLocaleFromVercel(mockRequest)).toBe(expected);
      },
    );

    it.each([
      { country: "ES", countryRegion: "MD", expected: Locale.ES }, // Madrid -> falls back to ES
      { country: "AD", countryRegion: "07", expected: Locale.CAT }, // Andorra la Vella -> falls back to AD
    ])(
      "should fall back to country locale ($expected) when region $country-$countryRegion is unmapped",
      ({ country, countryRegion, expected }) => {
        vi.mocked(geolocation).mockReturnValue({ country, countryRegion });
        expect(getLocaleFromVercel(mockRequest)).toBe(expected);
      },
    );

    it("should return null when both region and country are unmapped", () => {
      vi.mocked(geolocation).mockReturnValue({
        country: "JP",
        countryRegion: "TY",
      });

      expect(getLocaleFromVercel(mockRequest)).toBeNull();
    });
  });
});
