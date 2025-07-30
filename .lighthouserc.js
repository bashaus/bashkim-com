export default {
  ci: {
    collect: {
      settings: {
        extraHeaders: JSON.stringify({
          Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
        }),
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-results",
    },
  },
};
