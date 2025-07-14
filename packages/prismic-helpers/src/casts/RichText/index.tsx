import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import {
  Elements,
  HTMLSerializer,
  Link as LinkRenderer,
  RichText,
  RichTextBlock,
} from "prismic-reactjs";
import { useCallback } from "react";

import { useLinkResolver } from "../../contexts/LinkResolver/context";

export type PrismicRichTextProps = Readonly<{
  render: Array<RichTextBlock> | null;
}>;

export default function PrismicRichText({ render }: PrismicRichTextProps) {
  const PrismicLinkResolver = useLinkResolver();

  const htmlSerializer: HTMLSerializer<React.ReactNode> = useCallback(
    (type, element, _content, children, key) => {
      switch (type) {
        case Elements.heading1: {
          return (
            <Typography variant="h4" component="h1" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.heading2: {
          return (
            <Typography variant="h5" component="h2" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.heading3: {
          return (
            <Typography variant="h6" component="h3" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.heading4: {
          return (
            <Typography variant="h6" component="h4" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.heading5: {
          return (
            <Typography variant="h6" component="h5" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.heading6: {
          return (
            <Typography variant="h6" component="h6" gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.paragraph: {
          return (
            <Typography gutterBottom key={key}>
              {children}
            </Typography>
          );
        }

        case Elements.preformatted: {
          return <pre key={key}>{children}</pre>;
        }

        case Elements.strong: {
          return <strong key={key}>{children}</strong>;
        }

        case Elements.em: {
          return <em key={key}>{children}</em>;
        }

        case Elements.listItem: {
          return <li key={key}>{children}</li>;
        }

        case Elements.oListItem: {
          return <li key={key}>{children}</li>;
        }

        case Elements.list: {
          return <ul key={key}>{children}</ul>;
        }

        case Elements.oList: {
          return <ol key={key}>{children}</ol>;
        }

        case Elements.hyperlink: {
          const { target } = element.data;
          const href = LinkRenderer.url(element.data, PrismicLinkResolver);

          return (
            <Link
              href={href}
              target={target}
              rel={target ? "noreferrer noopener" : ""}
              key={key}
            >
              {children}
            </Link>
          );
        }

        /*
        case Elements.image:
          var linkUrl = element.linkTo
            ? PrismicDOM.Link.url(element.linkTo, module.exports.linkResolver)
            : null;
          var linkTarget =
            element.linkTo && element.linkTo.target
              ? `target="${element.linkTo.target}" rel="noopener"`
              : "";
          var wrapperClassList = [element.label || "", "block-img"];
          var img = `<img src="${element.url}" alt="${element.alt || ""}" copyright="${element.copyright || ""}">`;
          return `
            <p class="${wrapperClassList.join(" ")}">
              ${linkUrl ? `<a ${linkTarget} href="${linkUrl}">${img}</a>` : img}
            </p>
          `;

        case Elements.embed:
          return `
            <div data-oembed="${element.oembed.embed_url}"
              data-oembed-type="${element.oembed.type}"
              data-oembed-provider="${element.oembed.provider_name}"
            >
              ${element.oembed.html}
            </div>
          `;

        case Elements.label:
          var label = element.data.label ? ` class="${element.data.label}"` : "";
          return `<span ${label}>${children.join("")}</span>`;

        case Elements.span:
          return content ? content.replace(/\n/g, "<br />") : "";
        */

        default:
          return null;
      }
    },
    [PrismicLinkResolver],
  );

  if (!render) {
    return null;
  }

  return (
    <RichText
      render={render}
      linkResolver={PrismicLinkResolver}
      htmlSerializer={htmlSerializer}
    />
  );
}
