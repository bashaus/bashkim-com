import { RichText, RichTextBlock } from "prismic-reactjs";

import { useLinkResolver } from "../../contexts/LinkResolver/context";

export type PrismicRichTextProps = {
  render: Array<RichTextBlock> | null;
};

export const PrismicRichText = ({ render }: PrismicRichTextProps) => {
  const PrismicLinkResolver = useLinkResolver();

  if (!render) {
    return null;
  }

  return <RichText render={render} linkResolver={PrismicLinkResolver} />;
};
