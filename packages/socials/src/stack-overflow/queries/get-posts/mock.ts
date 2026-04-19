import { http, HttpResponse } from "msw";
import { z } from "zod";

import { getStackOverflowPostsFactory } from "./factory";

export const getStackOverflowPostsHandlerParamsSchema = z.object({
  userId: z.string(),
});

export type GetStackOverflowPostsHandlerParams = z.infer<
  typeof getStackOverflowPostsHandlerParamsSchema
>;

export const getStackOverflowPostsHandler =
  http.get<GetStackOverflowPostsHandlerParams>(
    "https://api.stackexchange.com/2.3/users/:userId/posts",
    async ({ params }) => {
      await getStackOverflowPostsHandlerParamsSchema.parseAsync(params);

      const fixture = getStackOverflowPostsFactory.build();
      return HttpResponse.json(fixture);
    },
  );
