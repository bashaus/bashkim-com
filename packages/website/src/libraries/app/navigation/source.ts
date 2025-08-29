import { HomeParams } from "./home";

export type SourceParams = HomeParams & {};

export const getSourcePath = (_params: SourceParams = {}) =>
  // `${getHomePath(params)}/source`
  `/source`;
