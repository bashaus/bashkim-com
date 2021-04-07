import express, { static as eStatic } from "express";
import path from "path";

import SitemapTemplate from "./templates/sitemap";
import SitemapIndexTemplate from "./templates/sitemapindex";

import { SitemapIndex } from "./sitemapindexes/index";

import { CaseStudiesSitemap } from "./sitemaps/case-studies";
import { PagesSitemap } from "./sitemaps/pages";

const app = express();

// sitemap indexes
app.get("/sitemap.xml", SitemapIndexTemplate(SitemapIndex));

// sitemaps
app.get("/sitemap/pages.xml", SitemapTemplate(PagesSitemap));
app.get("/sitemap/case-studies.xml", SitemapTemplate(CaseStudiesSitemap));

// static files
app.use(eStatic(path.resolve(__dirname, "../public")));

export default app;
