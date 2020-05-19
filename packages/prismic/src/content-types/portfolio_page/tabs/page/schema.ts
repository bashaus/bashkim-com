export default {
  featured: {
    type: "Group",
    config: {
      fields: {
        featured_title: {
          type: "StructuredText",
          config: {
            single: "heading3",
            label: "Title",
          },
        },
        featured_description: {
          type: "StructuredText",
          config: {
            multi: "paragraph, list-item",
            label: "Description",
          },
        },
        featured_case_study: {
          type: "Link",
          config: {
            select: "document",
            customtypes: ["case_study"],
            label: "Case study",
          },
        },
      },
      label: "Featured Case Studies",
    },
  },
};
