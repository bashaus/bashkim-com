import { HomeParams } from "./home";

export type PortfolioParams = HomeParams & {};

export const getPortfolioPath = (_params: PortfolioParams = {}) =>
  // `${getHomePath(params)}/portfolio`
  `/portfolio`;
