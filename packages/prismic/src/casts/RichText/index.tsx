import { RichText, RichTextBlock } from "prismic-reactjs";
import { useContext } from "react";

import { LinkResolverContext } from "../../contexts/LinkResolver/context";

export type PrismicRichTextProps = {
  render: Array<RichTextBlock> | null;
};

export const PrismicRichText = ({
  render,
}: PrismicRichTextProps): JSX.Element | null => {
  const PrismicLinkResolver = useContext(LinkResolverContext);

  if (!render) {
    return null;
  }

  return <RichText render={render} linkResolver={PrismicLinkResolver} />;
};
