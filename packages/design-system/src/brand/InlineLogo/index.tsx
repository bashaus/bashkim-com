import { SVGProps } from "react";

import InlineLogoVector from "../../assets/logo/inline.svg";

export type InlineLogoProps = Readonly<SVGProps<SVGElement>>;

export default function InlineLogo(props: InlineLogoProps) {
  return (
    <InlineLogoVector
      aria-label="Bash"
      height="auto"
      {...props}
      style={{ ...props.style, aspectRatio: 126 / 36 }}
    />
  );
}
