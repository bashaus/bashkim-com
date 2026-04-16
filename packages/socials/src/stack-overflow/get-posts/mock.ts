import { http, HttpResponse } from "msw";

import fixture from "./fixture.json";

export type GetStackOverflowPostsHandlerParams = Readonly<{
  userId: string;
}>;

export const getStackOverflowPostsHandler =
  http.get<GetStackOverflowPostsHandlerParams>(
    "https://api.stackexchange.com/2.3/users/:userId/posts",
    () => HttpResponse.json(fixture),
  );
