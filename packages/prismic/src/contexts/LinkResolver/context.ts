import type { LinkResolver } from "prismic-reactjs";
import { createContext } from "react";

import { LinkResolverNotImplementedError } from "./errors";

const defaultLinkResolver: LinkResolver = (): string => {
  throw LinkResolverNotImplementedError;
};

export const LinkResolverContext =
  createContext<LinkResolver>(defaultLinkResolver);
