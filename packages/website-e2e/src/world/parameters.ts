import { z } from "zod";

export const e2eParametersSchema = z.object({
  playwright: z
    .object({
      headless: z.stringbool().default(true),
      browser: z.enum(["chromium", "firefox"]).default("chromium"),
      baseURL: z.url().default("https://www.bashkim.com"),
    })
    .prefault({}),

  vercel: z
    .object({
      secret: z.string().optional(),
    })
    .prefault({}),
});

export type E2EParametersInput = z.input<typeof e2eParametersSchema>;
export type E2EParameters = z.infer<typeof e2eParametersSchema>;
