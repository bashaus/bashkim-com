import { z } from "zod";

export async function register() {
  if (process.env["NEXT_RUNTIME"] !== "nodejs") {
    return;
  }

  const mswEnabled = await z
    .stringbool()
    .default(false)
    .parseAsync(process.env["MSW_ENABLED"]);

  if (mswEnabled) {
    await import("@/libraries/msw/node");
  }
}
