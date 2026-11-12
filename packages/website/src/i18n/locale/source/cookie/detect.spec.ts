import { cookies } from "next/headers";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { detectLocaleFromCookie } from "./detect";

vi.mock("next/headers", () => ({
  cookies: vi.fn(),
}));

describe("detectLocaleFromCookie", () => {
  const mockGet = vi.fn();
  const mockDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(cookies).mockResolvedValue({
      get: mockGet,
      delete: mockDelete,
    } as unknown as Awaited<ReturnType<typeof cookies>>);
  });

  it("should delete the cookie and return null when the cookie does not exist", async () => {
    mockGet.mockReturnValue(undefined);

    const result = await detectLocaleFromCookie();

    expect(mockGet).toHaveBeenCalledWith("locale-selected");
    expect(mockDelete).toHaveBeenCalledWith("locale-selected");
    expect(result).toBeNull();
  });

  it("should delete the cookie and return null when the cookie value is invalid", async () => {
    mockGet.mockReturnValue({
      name: "locale-selected",
      value: "invalid-locale",
    });

    const result = await detectLocaleFromCookie();

    expect(mockDelete).toHaveBeenCalledWith("locale-selected");
    expect(result).toBeNull();
  });

  it("should delete the cookie and return null when the cookie value is an empty string", async () => {
    mockGet.mockReturnValue({ name: "locale-selected", value: "" });

    const result = await detectLocaleFromCookie();

    expect(mockDelete).toHaveBeenCalledWith("locale-selected");
    expect(result).toBeNull();
  });
});
