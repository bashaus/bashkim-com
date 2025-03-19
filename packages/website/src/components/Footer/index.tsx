import FooterCopyright from "../FooterCopyright";
import FooterNavigation from "../FooterNavigation";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.Footer>
      <FooterNavigation />
      <FooterCopyright />
    </S.Footer>
  );
}
