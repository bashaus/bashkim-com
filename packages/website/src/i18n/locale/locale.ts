import { z } from "zod";

export enum Locale {
  CA = "ca", // Catalan (Català)
  EN = "en", // English
  ES = "es", // Spanish (Español)
}
export const localeSchema = z.enum(Locale);

export function isLocale(value?: unknown): value is Locale {
  const response = localeSchema.safeParse(value);
  return response.success;
}

export const locales = Object.values(Locale);
export const defaultLocale = Locale.EN;
