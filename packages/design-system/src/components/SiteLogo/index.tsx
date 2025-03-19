import { SVGProps } from "react";

import SiteLogoVector from "../../assets/logo/site.svg";

export type SiteLogoProps = Readonly<SVGProps<SVGElement>>;

export default function SiteLogo(props: SiteLogoProps) {
  return <SiteLogoVector {...props} />;
}
