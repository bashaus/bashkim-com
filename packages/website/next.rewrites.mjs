//@ts-check

/**
 * @type {import('next').NextConfig['rewrites']}
 **/
export const rewrites = async () => [
  {
    source: "/sitemap.xml",
    destination: "/sitemaps",
  },
  {
    source: "/sitemaps/:entity*/:id.xml",
    destination: "/sitemaps/:entity*/sitemap/:id.xml",
  },
];
