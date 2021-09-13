import path from "path";
import fs from "fs/promises";

import CaseStudyContentTypeSchema from "../src/content-types/case_study/schema";
import HomePageContentTypeSchema from "../src/content-types/home_page/schema";
import PeerContentTypeSchema from "../src/content-types/peer/schema";
import PortfolioPageContentTypeSchema from "../src/content-types/portfolio_page/schema";
import TechnologyContentTypeSchema from "../src/content-types/technology/schema";

const OUT_DIR = path.resolve(__dirname, "../dist/schema");

const OUT_FILES = {
  "case_study.json": CaseStudyContentTypeSchema,
  "home_page.json": HomePageContentTypeSchema,
  "peer.json": PeerContentTypeSchema,
  "portfolio_page.json": PortfolioPageContentTypeSchema,
  "technology.json": TechnologyContentTypeSchema,
};

(async () => {
  await fs.mkdir(OUT_DIR, { recursive: true });

  await Promise.all(
    Object.entries(OUT_FILES).map(([file, schema]) => {
      return fs.writeFile(
        path.resolve(OUT_DIR, file),
        JSON.stringify(schema, null, 2)
      );
    })
  );
})();
