import { HomeParams } from "./home";

export type AboutParams = HomeParams & {};

export const getAboutPath = (_params: AboutParams = {}) =>
  // `${getHomePath(params)}/about`
  `/about`;
