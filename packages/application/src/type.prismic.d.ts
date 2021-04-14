declare module "prismic-richtext" {
  const Elements: {
    heading1: string;
    heading2: string;
    heading3: string;
    heading4: string;
    heading5: string;
    heading6: string;
    paragraph: string;
    preformatted: string;
    strong: string;
    em: string;
    "list-item": string;
    "o-list-item": string;
    "group-list-item": string;
    "group-o-list-item": string;
    image: string;
    embed: string;
    hyperlink: string;
    label: string;
    span: string;
  };
}

declare module "prismic-reactjs" {
  type RichText = {
    html?: string | null;
    text?: string | null;
    raw?: RichTextBlock | null;
  };

  type RichTextSpan = {
    start: number;
    end: number;
    type: string;
    text: string;
  };

  type RichTextBlock = {
    type: string;
    text: string;
    spans: Array<RichTextSpan>;
  };

  type LinkType = {
    link_type: "Any" | "Web";
    url?: string;
  };

  type LinkResolver = (doc: { type: string; uid: string }) => string;

  const Link: {
    url(link: LinkType, linkResolver: LinkResolver): string;
  };

  type htmlSerializerType = (
    type: string,
    element: RichTextSpan,
    content: string | null,
    children: React.ReactNode,
    key: number
  ) => React.ReactElement | null;

  const RichText: {
    render(
      content: Array<RichTextBlock>,
      linkResolver: LinkResolver
    ): RichTextBlock;
    htmlSerializer: htmlSerializerType;
  };
}
