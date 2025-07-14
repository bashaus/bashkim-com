import { SVGProps } from "react";

import InlineLogoVector from "../../assets/logo/inline.svg";

export type InlineLogoProps = Readonly<SVGProps<SVGElement>>;

export default function InlineLogo(props: InlineLogoProps) {
  return (
    <InlineLogoVector width={126} height={36} {...props} aria-label="Bash" />
  );
}
