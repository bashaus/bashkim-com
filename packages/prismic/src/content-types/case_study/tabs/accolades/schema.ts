import AccoladeSliceType from "@bashkim-com/prismic/slice-types/Accolade/schema.json";

export default {
  accolades: {
    type: "Slices",
    fieldset: "Accolades",
    config: {
      choices: {
        AccoladeSliceType,
      },
    },
  },
};
