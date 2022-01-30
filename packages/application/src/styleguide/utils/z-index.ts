const zIndexes = ["Turn", "Header", "Menu"];

export const zIndex = (name) => {
  return zIndexes.findIndex((x) => x === name) * 10;
};
