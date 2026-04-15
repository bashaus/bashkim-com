import fs from "node:fs/promises";
import path from "node:path";

import { parseRssFeed } from ".";

describe("parseRssFeed", () => {
  it("should parse the fixture", async () => {
    const xml = await fs.readFile(
      path.join(__dirname, "../medium/get-stories/fixture.xml"),
    );

    const contents = await parseRssFeed(xml.toString());
    expect(contents).toHaveProperty("rss");
  });
});
