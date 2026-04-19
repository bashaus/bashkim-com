import { track } from "@vercel/analytics/server";

import { trackQuota } from "./track-quota";

const response = { items: [], has_more: false };

describe("trackQuota", () => {
  it.each([
    [61, 300, 0.7966666666666666],
    [60, 300, 0.8],
    [30, 300, 0.9],
    [0, 300, 1],
  ])(
    "should report percentages",
    async (quota_remaining, quota_max, quotaUsage) => {
      const trackSpy = vi.mocked(track);
      trackQuota({ ...response, quota_remaining, quota_max });

      expect(trackSpy).toHaveBeenCalledWith(
        "Stack Overflow API usage",
        expect.objectContaining({ quotaUsage }),
      );
    },
  );
});
