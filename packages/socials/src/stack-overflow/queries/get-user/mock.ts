import { http, HttpResponse } from "msw";
import { z } from "zod";

import { getStackOverflowUserFactory } from "./factory";

export const getStackOverflowUserHandlerParamsSchema = z.object({
  userId: z.string(),
});

export type GetStackOverflowUserHandlerParams = z.infer<
  typeof getStackOverflowUserHandlerParamsSchema
>;

export const getStackOverflowUserHandler =
  http.get<GetStackOverflowUserHandlerParams>(
    "https://api.stackexchange.com/2.3/users/:userId",
    async ({ params }) => {
      await getStackOverflowUserHandlerParamsSchema.parseAsync(params);

      const fixture = getStackOverflowUserFactory.build();
      return HttpResponse.json(fixture);
    },
  );
