import fs from "node:fs/promises";
import path from "node:path";

import { http, HttpResponse } from "msw";

export type GetMediumStoriesHandlerParams = Readonly<{
  username: string;
}>;

export const getMediumStoriesHandler = http.get<GetMediumStoriesHandlerParams>(
  "https://medium.com/feed/:username",
  async () => {
    const fixture = await fs.readFile(path.join(__dirname, "./fixture.xml"));
    return HttpResponse.xml(fixture.toString());
  },
);
