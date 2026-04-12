import MuiDecorator from "./decorators/MuiDecorator";
import PrismicLinkResolverDecorator from "./decorators/PrismicLinkResolverDecorator";

export const decorators = [MuiDecorator, PrismicLinkResolverDecorator];

export const parameters = {
  controls: {
    expanded: true,
    sort: "requiredFirst",
    exclude: /^(className|[a-zA-Z]+ClassName)$/,
    matchers: {
      date: /(^date$|Date$|At$)/,
    },
  },

  options: {
    storySort: {
      order: ["Home", "*"],
    },
  },
};
