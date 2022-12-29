import styles from "./FooterCopyright.module.scss";

export const FooterCopyright = () => (
  <p
    className={styles["FooterCopyright"]}
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
  </p>
);
