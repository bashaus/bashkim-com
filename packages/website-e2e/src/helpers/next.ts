import { Request, Route } from "@playwright/test";

export function mockNextServerAction(
  callback: (route: Route, request: Request) => Promise<void>,
) {
  return async (route: Route, request: Request) => {
    if (request.method() !== "POST") {
      await route.continue();
      return;
    }

    const headers = request.headers();
    if (!headers["next-action"]) {
      await route.continue();
      return;
    }

    await callback(route, request);
  };
}
