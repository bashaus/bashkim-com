import styles from "./styles.module.scss";

export default function FooterCopyright() {
  return (
    <p
      className={styles["FooterCopyright"]}
      role="contentinfo"
      aria-label="Copyright, Two-Thousand-and-Eight to Two-Thousand-and-Twenty-Three, Bashkim Isai. All rights reserved."
    >
      <small aria-hidden="true">
        Copyright &copy;{" "}
        <time dateTime="2008" title="2008">
          MMVIII
        </time>
        &#x2011;
        <time dateTime="2024" title="2024">
          MMXXIV
        </time>
        , Bashkim&nbsp;Isai. All&nbsp;rights&nbsp;reserved.
      </small>
    </p>
  );
}
