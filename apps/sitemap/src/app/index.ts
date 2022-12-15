import express, { static as eStatic } from "express";
import path from "path";

import { router as healthRouter } from "./routes/health";
import { SitemapIndex } from "./sitemapindexes/index";
import { CaseStudiesSitemap } from "./sitemaps/case-studies";
import { PagesSitemap } from "./sitemaps/pages";
import { SitemapTemplate } from "./templates/sitemap";
import { SitemapIndexTemplate } from "./templates/sitemapindex";

export const app = express();
app.disable("x-powered-by");

// health
app.use("/.well-known/sitemap/health", healthRouter);

// sitemap indexes
app.get("/sitemap.xml", SitemapIndexTemplate(SitemapIndex));

// sitemaps
app.get("/sitemap/pages.xml", SitemapTemplate(PagesSitemap));
app.get("/sitemap/case-studies.xml", SitemapTemplate(CaseStudiesSitemap));

// static files
app.use(eStatic(path.resolve(__dirname, "../public")));
