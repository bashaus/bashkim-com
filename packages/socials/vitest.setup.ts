import "dotenv/config";

import { track } from "@vercel/analytics/server";
import { setupServer } from "msw/node";
import { z } from "zod";

import { handlers } from "./src/mock.ts";

/* msw/node */

export const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

/* @vercel/analytics/server */

vi.mock("@vercel/analytics/server", () => ({
  track: vi.fn(),
}));

afterEach(() => {
  const trackSpy = vi.mocked(track);
  trackSpy.mockReset();
});

/* zod */

expect.extend({
  toMatchSchema: async (received: unknown, schema: z.ZodType) => {
    if (!schema) {
      return {
        pass: false,
        message: () => "schema is not instance of a zod type",
      };
    }

    const result = await schema.safeParseAsync(received);
    return {
      pass: result.success,
      message: () => (result.error ? z.prettifyError(result.error) : ""),
    };
  },
});
