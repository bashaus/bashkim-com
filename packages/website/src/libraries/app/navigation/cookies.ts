import { HomeParams } from "./home";

export type CookiesParams = HomeParams & {};

export const getCookiesPath = (_params: CookiesParams = {}) =>
  // `${getHomePath(params)}/cookies`
  `/cookies`;
