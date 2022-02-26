import { HTMLAttributes } from "react";

import * as S from "./styles";

export type FooterLinksProps = HTMLAttributes<HTMLUListElement>;

export const FooterLinks = (props: FooterLinksProps) => (
  <S.FooterLinks {...props} />
);
