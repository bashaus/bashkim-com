import { ComponentPropsWithoutRef } from "react";

import * as S from "./FooterLinks.styles";

export type FooterLinksProps = ComponentPropsWithoutRef<"ul">;

export const FooterLinks = (props: FooterLinksProps) => (
  <S.FooterLinks {...props} />
);
