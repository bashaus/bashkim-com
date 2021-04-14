export enum PrismicRichTextElement {
  PARAGRAPH = "paragraph",
  PREFORMATTED = "preformatted",
  HEADING1 = "heading1",
  HEADING2 = "heading2",
  HEADING3 = "heading3",
  HEADING4 = "heading4",
  HEADING5 = "heading5",
  HEADING6 = "heading6",
  STRONG = "strong",
  EM = "em",
  HYPERLINK = "hyperlink",
  IMAGE = "image",
  EMBED = "embed",
  LIST_ITEM = "list-item",
  O_LIST_ITEM = "o-list-item",
}

export type PrismicRichTextTypeItem<TType> = {
  type: TType;
  text: string;
  spans: Array<Record<string, never>>;
};

export type PrismicRichTextType<TType> = Array<PrismicRichTextTypeItem<TType>>;
