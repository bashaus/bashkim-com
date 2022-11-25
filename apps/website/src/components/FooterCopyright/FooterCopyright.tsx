import * as S from "./FooterCopyright.styles";

export const FooterCopyright = () => (
  <S.FooterCopyright
    role="contentinfo"
    aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty-Two, Bashkim Isai. All rights reserved."
  >
    <small aria-hidden="true">
      Copyright &copy;{" "}
      <time dateTime="2008" title="2008">
        MMVIII
      </time>
      &#x2011;
      <time dateTime="2022" title="2022">
        MMXXII
      </time>
      , Bashkim&nbsp;Isai. All&nbsp;rights&nbsp;reserved.
    </small>
  </S.FooterCopyright>
);
