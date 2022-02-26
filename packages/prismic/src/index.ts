/* Prismic types */
export type { PrismicDateType } from "./types/Date";
export type { PrismicDateTimeType } from "./types/DateTime";
export type { PrismicEmbedType } from "./types/Embed";
export type { PrismicImageType } from "./types/Image";
export type { PrismicLinkType } from "./types/Link";
export type { PrismicRelatedDocumentType } from "./types/RelatedDocument";
export type { PrismicSliceType } from "./types/Slice";

/* Prismic type casts */
export { PrismicDate } from "./casts/Date";
export { PrismicRichText } from "./casts/RichText";

/* Content types */
export * from "./content-types";

/* Slices types (& fixtures) */
export * from "./slice-types";
export * from "./slice-types/fixtures";

/* Contexts */
export {
  LinkResolverContext,
  useLinkResolver,
} from "./contexts/LinkResolver/context";
