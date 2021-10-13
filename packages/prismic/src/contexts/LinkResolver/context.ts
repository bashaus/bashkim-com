import { createContext } from "react";
import type { LinkResolver } from "prismic-reactjs";

import { LinkResolverNotImplementedError } from "./errors";

const defaultLinkResolver: LinkResolver = (): string => {
  throw LinkResolverNotImplementedError;
};

export const LinkResolverContext =
  createContext<LinkResolver>(defaultLinkResolver);
