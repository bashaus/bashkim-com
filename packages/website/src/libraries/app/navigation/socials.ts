import { HomeParams } from "./home";

/* Socials */

export type SocialsParams = HomeParams & {};

export const getSocialsPath = (_params: SocialsParams = {}) =>
  // `${getHomePath(params)}/socials`
  `/socials`;

/* Socials (GitHub) */

export type SocialsGitHubParams = SocialsParams & {};

export const getSocialsGitHubPath = (params: SocialsGitHubParams = {}) =>
  `${getSocialsPath(params)}/github`;

/* Socials (Medium) */

export type SocialsMediumParams = SocialsParams & {};

export const getSocialsMediumPath = (params: SocialsMediumParams = {}) =>
  `${getSocialsPath(params)}/medium`;

/* Socials (Linked In) */

export type SocialsLinkedInParams = SocialsParams & {};

export const getSocialsLinkedInPath = (params: SocialsLinkedInParams = {}) =>
  `${getSocialsPath(params)}/linked-in`;

/* Socials (Stack Overflow) */

export type SocialsStackOverflowParams = SocialsParams & {};

export const getSocialsStackOverflowPath = (
  params: SocialsStackOverflowParams = {},
) => `${getSocialsPath(params)}/stack-overflow`;
