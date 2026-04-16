import { http, HttpResponse } from "msw";

import fixture from "./fixture.json";

export type GetStackOverflowUserHandlerParams = Readonly<{
  userId: string;
}>;

export const getStackOverflowUserHandler =
  http.get<GetStackOverflowUserHandlerParams>(
    "https://api.stackexchange.com/2.3/users/:userId",
    () => HttpResponse.json(fixture),
  );
