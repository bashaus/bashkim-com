import { z } from "zod";

export const envSchema = z.object({
  uri: z.url().default("https://api.github.com/graphql"),
  token: z.string(),
});

const env = envSchema.parse({
  token: process.env["GITHUB_TOKEN"],
});

export default env;
