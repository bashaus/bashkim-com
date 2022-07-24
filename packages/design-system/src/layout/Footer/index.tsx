import { ComponentPropsWithRef } from "react";

import * as S from "./styles";

export type FooterProps = ComponentPropsWithRef<"div">;

export const Footer = (props: FooterProps) => <S.Footer {...props} />;
