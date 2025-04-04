export default {
  meta_title: {
    type: "Text",
    config: {
      label: "Meta Title",
      useAsTitle: true,
    },
  },
  meta_description: {
    type: "Text",
    config: {
      label: "Meta Description",
    },
  },
  sitemap_changefreq: {
    type: "Select",
    config: {
      label: "Sitemap Change Frequency",
      options: [
        "monthly",
        "always",
        "hourly",
        "daily",
        "weekly",
        "monthly",
        "yearly",
        "never",
      ],
      default_value: "monthly",
    },
  },
  sitemap_priority: {
    type: "Select",
    config: {
      label: "Sitemap Priority",
      options: [
        "0.5",
        "0.1",
        "0.2",
        "0.3",
        "0.4",
        "0.5",
        "0.6",
        "0.7",
        "0.8",
        "0.9",
        "1.0",
      ],
      default_value: "0.5",
    },
  },
};
