import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { forwardRef } from "react";

const NextLinkComponent = forwardRef<HTMLAnchorElement, NextLinkProps>(
  function NextLinkComponent(props, ref) {
    return <NextLink ref={ref} {...props} />;
  },
);

export default NextLinkComponent;
