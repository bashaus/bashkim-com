import { RichTextField } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";

import { useLinkResolver } from "../LinkResolver";
import RTEm from "./components/RTEm";
import RTHeading1 from "./components/RTHeading1";
import RTHeading2 from "./components/RTHeading2";
import RTHeading3 from "./components/RTHeading3";
import RTHeading4 from "./components/RTHeading4";
import RTHeading5 from "./components/RTHeading5";
import RTHeading6 from "./components/RTHeading6";
import RTLink from "./components/RTLink";
import RTParagraph from "./components/RTParagraph";
import RTPreformatted from "./components/RTPreformatted";
import RTStrong from "./components/RTStrong";

const components: JSXMapSerializer = {
  heading1: RTHeading1,
  heading2: RTHeading2,
  heading3: RTHeading3,
  heading4: RTHeading4,
  heading5: RTHeading5,
  heading6: RTHeading6,
  paragraph: RTParagraph,
  hyperlink: RTLink,
  preformatted: RTPreformatted,
  strong: RTStrong,
  em: RTEm,
  // image: RTImage,
  // embed: RTEmbed,
};

export type RichTextFormatterProps = Readonly<{
  field?: RichTextField | null;
}>;

export default function RichTextFormatter({ field }: RichTextFormatterProps) {
  const linkResolver = useLinkResolver();

  return (
    <PrismicRichText
      field={field}
      linkResolver={linkResolver}
      components={components}
    />
  );
}
