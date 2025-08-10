module.exports = {
  ci: {
    collect: {
      url: [],
      settings: {
        extraHeaders: {
          "x-vercel-set-bypass-cookie": "true",
          "x-vercel-protection-bypass":
            process.env.VERCEL_AUTOMATION_BYPASS_SECRET,
        },
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-results",
    },
  },
};
