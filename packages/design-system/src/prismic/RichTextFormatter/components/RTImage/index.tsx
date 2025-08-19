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

  const linkUrl = node.linkTo ? asLink(node.linkTo, { linkResolver }) : null;

  const linkTarget =
    node.linkTo?.link_type === "Web" ? `target="_blank" rel="noopener"` : "";

  const img = `<img src="${node.url}" alt="${node.alt || ""}" copyright="${node.copyright || ""}">`;

  return `
    <p>
      ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
    </p>
  `;
}
