import { z } from "zod";

export const envSchema = z.object({
  github: z.object({
    endpoint: z.url().default("https://api.github.com/graphql"),
    token: z.string(),
  }),
});

const env = envSchema.parse({
  github: {
    endpoint: process.env["GITHUB_ENDPOINT"],
    token: process.env["GITHUB_TOKEN"],
  },
});

export default env;
