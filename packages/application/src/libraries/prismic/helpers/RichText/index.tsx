import { RichText, RichTextBlock } from "prismic-reactjs";

import { PrismicLinkResolver } from "%prismic/helpers/Link";

export type PrismicRichTextProps = {
  render?: Array<RichTextBlock>;
};

export const PrismicRichText = ({
  render,
}: PrismicRichTextProps): JSX.Element | null => {
  if (!render) {
    return null;
  }

  return <RichText render={render} linkResolver={PrismicLinkResolver} />;
};
