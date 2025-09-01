import FooterCopyright from "@/components/FooterCopyright";
import FooterNavigation from "@/components/FooterNavigation";

import * as S from "./styles";

export default function Footer() {
  return (
    <S.Footer>
      <FooterNavigation />
      <FooterCopyright />
    </S.Footer>
  );
}
