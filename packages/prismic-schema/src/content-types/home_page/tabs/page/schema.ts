export default {
  featured_case_studies: {
    type: "Group",
    config: {
      label: "Featured case studies",
      fields: {
        featured_case_study: {
          type: "Link",
          config: {
            select: "document",
            label: "Case study",
            customtypes: ["case_study"],
          },
        },
      },
    },
  },
};
