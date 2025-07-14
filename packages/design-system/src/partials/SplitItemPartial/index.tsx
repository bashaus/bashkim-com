import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type SplitItemPartialProps = Readonly<
  ComponentPropsWithoutRef<"div"> & {
    backgroundImage?: string;
  }
>;

export default function SplitItemPartial({
  backgroundImage,
  children,
  ...props
}: SplitItemPartialProps) {
  return (
    <S.SplitItemPartial
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
      data-background-image={backgroundImage ? "true" : "false"}
      {...props}
    >
      {children}
    </S.SplitItemPartial>
  );
}
