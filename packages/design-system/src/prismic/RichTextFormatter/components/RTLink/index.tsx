import Link from "@mui/material/Link";
import { asLink, RTLinkNode } from "@prismicio/client";
import { ReactNode } from "react";

import { useLinkResolver } from "../../../LinkResolver";

export type RTLinkProps = Readonly<{
  children: Array<ReactNode>;
  node: RTLinkNode;
  key: string;
}>;

export default function RTLink({ children, node, key }: RTLinkProps) {
  const linkResolver = useLinkResolver();

  const { link_type } = node.data;
  const href = asLink(node.data, { linkResolver }) ?? undefined;

  return (
    <Link
      href={href}
      target={link_type === "Web" ? "_blank" : ""}
      rel={link_type === "Web" ? "noreferrer noopener" : ""}
      key={key}
    >
      {children}
    </Link>
  );
}
