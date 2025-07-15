import { SVGProps } from "react";

import SquareLogoVector from "./square-logo.svg";

export type SquareLogoProps = Readonly<SVGProps<SVGElement>>;

export default function SquareLogo(props: SquareLogoProps) {
  return (
    <SquareLogoVector
      aria-label="Bash"
      height="auto"
      {...props}
      style={{ ...props.style, aspectRatio: "72 / 72" }}
    />
  );
}
