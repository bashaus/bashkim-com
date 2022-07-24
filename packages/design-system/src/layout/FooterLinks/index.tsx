import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type FooterLinksProps = ComponentPropsWithRef<"ul">;

export const FooterLinks = (props: FooterLinksProps) => (
  <S.FooterLinks {...props} />
);
