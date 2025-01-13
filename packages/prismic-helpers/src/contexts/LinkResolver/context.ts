import type { LinkResolver } from "prismic-reactjs";
import { createContext, useContext } from "react";

import { LinkResolverNotImplementedError } from "./errors";

const LinkResolverDefault: LinkResolver = () => {
  throw LinkResolverNotImplementedError;
};

const LinkResolverContext = createContext<LinkResolver>(LinkResolverDefault);

export const useLinkResolver = () => useContext(LinkResolverContext);

export default LinkResolverContext;
