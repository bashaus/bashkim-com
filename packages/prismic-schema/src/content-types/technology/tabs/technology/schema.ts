export default {
  technology_name: {
    type: "Text",
    config: {
      label: "Technology name",
      useAsTitle: true,
    },
  },
  technology_icon: {
    type: "Image",
    config: {
      constraint: {
        width: 300,
        height: 300,
      },
      thumbnails: [],
      label: "Technology icon",
    },
  },
};
