//@ts-check

/**
 * @type {import('next').NextConfig['headers']}
 **/
export const headers = async () => [
  {
    source: "/(.*)",
    headers: [
      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options
       */
      {
        key: "X-Content-Type-Options",
        value: "nosniff",
      },

      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-DNS-Prefetch-Control
       */
      {
        key: "X-DNS-Prefetch-Control",
        value: "on",
      },

      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Referrer-Policy
       */
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },

      /**
       * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy
       */
      {
        key: "Permissions-Policy",
        value: "camera=(), geolocation=(), microphone=(), payment=()",
      },
    ],
  },
];
