const zIndexes = ["Turn", "Header", "Menu", "GridLines", "Modal"];

export const zIndex = (name) => {
  return zIndexes.findIndex((x) => x === name) * 10;
};
