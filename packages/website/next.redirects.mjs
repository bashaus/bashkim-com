//@ts-check

/**
 * @type {import('next').NextConfig['redirects']}
 **/
export const redirects = async () => [
  {
    source: "/index.html",
    destination: "/",
    permanent: true,
  },
  {
    basePath: false,
    source: "/blog/2013/11/physical-computing-article-on-make-magazine",
    destination:
      "https://medium.com/@bashaus/web-based-physical-computing-1213fafb448c",
    permanent: true,
  },
  {
    basePath: false,
    source: "/blog/2013/07/web-based-physical-computing",
    destination:
      "https://medium.com/@bashaus/web-based-physical-computing-1213fafb448c",
    permanent: true,
  },
];
