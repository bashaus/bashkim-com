import {
  Group,
  RichTextFormatter,
  SubtitlePartial,
} from "@bashkim-com/design-system";

import EthicallyVector from "../../assets/principles/ethically.svg";
import MaintainableVector from "../../assets/principles/maintainable.svg";
import OnTimeVector from "../../assets/principles/on-time.svg";
import RobustVector from "../../assets/principles/robust.svg";
import SecurelyVector from "../../assets/principles/securely.svg";
import ToSatisfactionVector from "../../assets/principles/to-satisfaction.svg";
import ToSpecificationVector from "../../assets/principles/to-specification.svg";
import WithinBudgetVector from "../../assets/principles/within-budget.svg";
import styles from "./styles.module.scss";

export default function AboutPrinciples() {
  return (
    <Group>
      <SubtitlePartial>
        <h2>Core principles</h2>
      </SubtitlePartial>

      <ul className={styles["Principles"]}>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>On-time</h3>
            <OnTimeVector />
            <p>
              Committed to delivering a resolved product to an
              agreed&nbsp;schedule
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>Within budget</h3>
            <WithinBudgetVector />
            <p>
              Because all financial investments are a risk, there needs to be a
              responsibility to&nbsp;deliver
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>To specification</h3>
            <ToSpecificationVector />
            <p>
              Producing exactly what everyone agrees to the highest
              possible&nbsp;standards
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>To satisfaction</h3>
            <ToSatisfactionVector />
            <p>
              Software is designed for people, so let&apos;s put a&nbsp;smile on
              our client&apos;s customers&apos;&nbsp;faces
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>Maintainable</h3>
            <MaintainableVector />
            <p>
              Everyone who works on the project also has to fall in love with
              the code&nbsp;too
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>Securely</h3>
            <SecurelyVector />
            <p>
              No client wants media attention for the wrong reasons, especially
              because of your&nbsp;work
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>Ethically</h3>
            <EthicallyVector />
            <p>
              Projects must increase the quality of life for
              all&nbsp;stakeholders
            </p>
          </RichTextFormatter>
        </li>
        <li className={styles["Principle"]}>
          <RichTextFormatter className={styles["Cell"]}>
            <h3>Robust</h3>
            <RobustVector />
            <p>
              Responsible testing methodologies accompanied with continuous
              integration and automated&nbsp;deployment
            </p>
          </RichTextFormatter>
        </li>
      </ul>
    </Group>
  );
}
