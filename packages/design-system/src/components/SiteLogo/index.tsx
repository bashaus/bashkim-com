import { SVGProps } from "react";

import InlineLogoVector from "../../assets/logo/inline.svg";

export type SiteLogoProps = Readonly<SVGProps<SVGElement>>;

export default function SiteLogo(props: SiteLogoProps) {
  return <InlineLogoVector {...props} />;
}
