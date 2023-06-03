/**
 * @see https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file
 */

export default {
  process() {
    return {
      code: `module.exports = {};`,
    };
  },
  getCacheKey() {
    // The output is always the same.
    return "svgTransform";
  },
};
