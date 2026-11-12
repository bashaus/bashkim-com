import { geolocation } from "@vercel/functions";
import { NextRequest } from "next/server";

import { Locale } from "../../locale";

const ipCountryLocale: Record<string, Locale> = {
  AD: Locale.CA, // Andorra
  "ES-CA": Locale.CA, // Spain, Catalonia
  "ES-IB": Locale.CA, // Spain, Islas Baleares
  "ES-PM": Locale.CA, // Spain, Palma de Mallorca

  AR: Locale.ES, // Argentina
  BO: Locale.ES, // Bolivia
  CL: Locale.ES, // Chile
  CO: Locale.ES, // Colombia
  CR: Locale.ES, // Costa Rica
  CU: Locale.ES, // Cuba
  DO: Locale.ES, // Dominican Republic
  EC: Locale.ES, // Ecuador
  SV: Locale.ES, // El Salvador
  GQ: Locale.ES, // Equatorial Guinea
  GT: Locale.ES, // Guatemala
  HN: Locale.ES, // Honduras
  MX: Locale.ES, // Mexico
  NI: Locale.ES, // Nicaragua
  PA: Locale.ES, // Panama
  PY: Locale.ES, // Paraguay
  PE: Locale.ES, // Peru
  ES: Locale.ES, // Spain
  UY: Locale.ES, // Uruguay
  VE: Locale.ES, // Venezuela

  AG: Locale.EN, // Antigua and Barbuda
  AU: Locale.EN, // Australia
  BS: Locale.EN, // Bahamas
  BB: Locale.EN, // Barbados
  BZ: Locale.EN, // Belize
  CA: Locale.EN, // Canada
  DM: Locale.EN, // Dominica
  GD: Locale.EN, // Grenada
  GY: Locale.EN, // Guyana
  IE: Locale.EN, // Ireland
  JM: Locale.EN, // Jamaica
  NZ: Locale.EN, // New Zealand
  KN: Locale.EN, // Saint Kitts and Nevis
  LC: Locale.EN, // Saint Lucia
  VC: Locale.EN, // Saint Vincent and the Grenadines
  TT: Locale.EN, // Trinidad and Tobago
  GB: Locale.EN, // United Kingdom
  US: Locale.EN, // United States

  BW: Locale.EN, // Botswana
  BI: Locale.EN, // Burundi
  CM: Locale.EN, // Cameroon
  SZ: Locale.EN, // Eswatini
  GM: Locale.EN, // Gambia
  GH: Locale.EN, // Ghana
  KE: Locale.EN, // Kenya
  LS: Locale.EN, // Lesotho
  LR: Locale.EN, // Liberia
  MW: Locale.EN, // Malawi
  MU: Locale.EN, // Mauritius
  NA: Locale.EN, // Namibia
  NG: Locale.EN, // Nigeria
  RW: Locale.EN, // Rwanda
  SC: Locale.EN, // Seychelles
  SL: Locale.EN, // Sierra Leone
  ZA: Locale.EN, // South Africa
  SS: Locale.EN, // South Sudan
  SD: Locale.EN, // Sudan
  TZ: Locale.EN, // Tanzania
  UG: Locale.EN, // Uganda
  ZM: Locale.EN, // Zambia
  ZW: Locale.EN, // Zimbabwe
  FJ: Locale.EN, // Fiji
  KI: Locale.EN, // Kiribati
  MH: Locale.EN, // Marshall Islands
  FM: Locale.EN, // Micronesia
  NR: Locale.EN, // Nauru
  PW: Locale.EN, // Palau
  PG: Locale.EN, // Papua New Guinea
  WS: Locale.EN, // Samoa
  SB: Locale.EN, // Solomon Islands
  TO: Locale.EN, // Tonga
  TV: Locale.EN, // Tuvalu
  VU: Locale.EN, // Vanuatu
  IN: Locale.EN, // India
  PK: Locale.EN, // Pakistan
  PH: Locale.EN, // Philippines
  SG: Locale.EN, // Singapore
  MT: Locale.EN, // Malta
};

export function detectLocaleFromVercel(request: NextRequest) {
  const { country, countryRegion } = geolocation(request);
  if (!country) {
    return null;
  }

  if (countryRegion) {
    const regionLocale = ipCountryLocale[`${country}-${countryRegion}`];
    if (regionLocale) {
      return regionLocale;
    }
  }

  const countryLocale = ipCountryLocale[country];
  return countryLocale ?? null;
}
