import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { forwardRef } from "react";

const MuiNextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function MuiNextLink(props, ref) {
    return <NextLink ref={ref} {...props} />;
  },
);

export default MuiNextLink;
