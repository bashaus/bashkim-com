import { LinkResolverFunction } from "@prismicio/client";
import { createContext, useContext } from "react";

export class LinkResolverNotImplementedError extends Error {
  constructor() {
    super("Prismic link resolver not implemented");
  }
}

const LinkResolverDefault: LinkResolverFunction = () => {
  throw LinkResolverNotImplementedError;
};

const LinkResolverContext =
  createContext<LinkResolverFunction>(LinkResolverDefault);

export const useLinkResolver = () => useContext(LinkResolverContext);

export default LinkResolverContext;
