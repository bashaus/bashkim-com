import LinkResolverContext from "@bashkim-com/design-system/LinkResolver";
import { LinkResolverFunction } from "@prismicio/client";
import { ComponentType } from "react";

const storybookLinkResolver: LinkResolverFunction = () => {
  return "#";
};

export default function PrismicLinkResolverDecorator(Story: ComponentType) {
  return (
    <LinkResolverContext.Provider value={storybookLinkResolver}>
      <Story />
    </LinkResolverContext.Provider>
  );
}
