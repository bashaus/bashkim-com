import styles from "./styles.module.scss";

export const FooterCopyright = (): JSX.Element => (
  <p
    className={styles.FooterCopyright}
    role="contentinfo"
    aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty, Bashkim Isai. All rights reserved."
  >
    <span aria-hidden="true">
      Copyright &copy;{" "}
      <time dateTime="2008" title="2008">
        MMVIII
      </time>
      &#x2011;
      <time dateTime="2021" title="2021">
        MMXXI
      </time>
      , Bashkim&nbsp;Isai. All&nbsp;rights&nbsp;reserved.
    </span>
  </p>
);
