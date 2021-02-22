import ExhibitionSliceType from "@bashkim-com/prismic/slice-types/Exhibition/schema.json";

export default {
  exhibitions: {
    type: "Slices",
    fieldset: "Exhibitions",
    config: {
      choices: {
        ExhibitionSliceType,
      },
    },
  },
};
