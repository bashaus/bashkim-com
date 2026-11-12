import { getLocalePath, LocaleParams } from "./locale";

export function getSocialsPath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}/socials`;
}

export function getSocialsGitHubPath({ locale }: LocaleParams) {
  return `${getSocialsPath({ locale })}/github`;
}

export function getSocialsMediumPath({ locale }: LocaleParams) {
  return `${getSocialsPath({ locale })}/medium`;
}

export function getSocialsLinkedInPath({ locale }: LocaleParams) {
  return `${getSocialsPath({ locale })}/linked-in`;
}

export function getSocialsStackOverflowPath({ locale }: LocaleParams) {
  return `${getSocialsPath({ locale })}/stack-overflow`;
}
