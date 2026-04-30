import Link from "@mui/material/Link";
import { asLink, RTImageNode } from "@prismicio/client";
import { ReactNode } from "react";

import { useLinkResolver } from "../../../LinkResolver";

export type RTImageProps = Readonly<{
  children: Array<ReactNode>;
  node: RTImageNode;
  key: string;
}>;

export default function RTImage({ node }: RTImageProps) {
  const linkResolver = useLinkResolver();

  const img = (
    <img src={node.url} alt={node.alt || ""} title={node.copyright || ""} />
  );

  if (!node.linkTo) {
    return <p>{img}</p>;
  }

  const linkProps = {
    href: asLink(node.linkTo, { linkResolver }) ?? undefined,
    target: node.linkTo?.link_type === "Web" ? "_blank" : undefined,
    rel: node.linkTo?.link_type === "Web" ? "noopener noreferrer" : undefined,
  };

  return (
    <p>
      <Link {...linkProps}>{img}</Link>
    </p>
  );
}
