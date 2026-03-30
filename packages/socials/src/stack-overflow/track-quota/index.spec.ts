import { track } from "@vercel/analytics/server";

import { trackQuota } from ".";

vi.mock("@vercel/analytics/server", () => ({
  track: vi.fn(),
}));

afterEach(() => {
  const trackSpy = vi.mocked(track);
  trackSpy.mockReset();
});

const response = { items: [], has_more: false };

describe("checkQuota", () => {
  it("should do nothing when under 80%", async () => {
    const trackSpy = vi.mocked(track);
    trackQuota({ ...response, quota_remaining: 61, quota_max: 300 });

    expect(trackSpy).toHaveBeenCalledWith(
      "Stack Overflow API usage",
      expect.objectContaining({
        quotaUsage: 0.7966666666666666,
      }),
    );
  });

  it("should warn when at 80%", async () => {
    const trackSpy = vi.mocked(track);
    trackQuota({ ...response, quota_remaining: 60, quota_max: 300 });

    expect(trackSpy).toHaveBeenCalledWith(
      "Stack Overflow API usage",
      expect.objectContaining({
        quotaUsage: 0.8,
      }),
    );
  });

  it("should warn when at 90%", async () => {
    const trackSpy = vi.mocked(track);
    trackQuota({ ...response, quota_remaining: 30, quota_max: 300 });

    expect(trackSpy).toHaveBeenCalledWith(
      "Stack Overflow API usage",
      expect.objectContaining({
        quotaUsage: 0.9,
      }),
    );
  });

  it("should error when at 100%", async () => {
    const trackSpy = vi.mocked(track);
    trackQuota({ ...response, quota_remaining: 0, quota_max: 300 });

    expect(trackSpy).toHaveBeenCalledWith(
      "Stack Overflow API usage",
      expect.objectContaining({
        quotaUsage: 1,
      }),
    );
  });
});
