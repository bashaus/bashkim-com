import { RTEmbedNode } from "@prismicio/client";
import { ReactNode } from "react";

export type RTEmbedProps = Readonly<{
  children: Array<ReactNode>;
  node: RTEmbedNode;
  key: string;
}>;

export default function RTEmbed({ node }: RTEmbedProps) {
  return `
    <div data-oembed="${node.oembed.embed_url}"
      data-oembed-type="${node.oembed.type}"
      data-oembed-provider="${node.oembed.provider_name}"
    >
      ${node.oembed.html}
    </div>
  `;
}
