import { getLocalePath, LocaleParams } from "./locale";

export function getHomePath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}`;
}

export function getAboutPath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}/about`;
}

export function getCookiesPath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}/cookies`;
}

export function getSourcePath({ locale }: LocaleParams) {
  return `${getLocalePath({ locale })}/source`;
}
