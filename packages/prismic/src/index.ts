import Client from "./client";
export * from "./content-types";
export * from "./slice-types";
export * from "./slice-types/fixtures";

export { default as DocumentLinkPrismicType } from "./types/document-link";
export { default as EmbedPrismicType } from "./types/embed";
export { default as ImagePrismicType } from "./types/image";
export { default as LinkPrismicType } from "./types/link";
export { default as RichTextPrismicType } from "./types/rich-text";
export { default as SlicePrismicType } from "./types/slice";

export default Client;
