/* Prismic types */
export type { PrismicDateType } from "./types/Date";
export type { PrismicDateTimeType } from "./types/DateTime";
export type { PrismicEmbedType } from "./types/Embed";
export type { PrismicImageType } from "./types/Image";
export type { PrismicLinkType } from "./types/Link";
export type { PrismicRelatedDocumentType } from "./types/RelatedDocument";
export type { PrismicSliceType } from "./types/Slice";

/* Prismic type casts */
export { default as PrismicDate } from "./casts/Date";
export { default as PrismicRichText } from "./casts/RichText";

/* Contexts */
export {
  default as LinkResolverContext,
  useLinkResolver,
} from "./contexts/LinkResolver/context";
