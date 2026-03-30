import { track } from "@vercel/analytics/server";
import { z } from "zod";

import { StackOverflowResponse } from "../response/schema";

export async function trackQuota(
  response: StackOverflowResponse<z.ZodUnknown>,
) {
  const { quota_max: quotaMax, quota_remaining: quotaRemaining } = response;
  const quotaUsed = quotaMax - quotaRemaining;
  const quotaUsage = quotaUsed / quotaMax;

  await track("Stack Overflow API usage", {
    quotaUsage,
    quotaUsed,
    quotaMax,
    quotaRemaining,
  });
}
