export enum Layer {
  TURN,
  HEADER,
  MENU,
  GRID_LINES,
  MODAL,
}

export const zIndex = (layer: Layer) => {
  return Object.values(Layer).findIndex((x) => x === layer) * 10;
};
