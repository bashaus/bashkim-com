import { HTMLAttributes } from "react";

import * as S from "./styles";

export type FooterProps = HTMLAttributes<HTMLDivElement>;

export const Footer = (props: FooterProps) => <S.Footer {...props} />;
