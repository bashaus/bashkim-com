import { ComponentPropsWithoutRef } from "react";

import * as S from "./styles";

export type FooterProps = ComponentPropsWithoutRef<"div">;

export const Footer = (props: FooterProps) => <S.Footer {...props} />;
