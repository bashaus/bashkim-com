import {
  RichTextFormatter,
  Group,
  TitlePartial,
} from "@bashkim-com/design-system";

import OnTimeImage from "%public/static/vectors/principles/on-time.svg";
import WithinBudgetImage from "%public/static/vectors/principles/within-budget.svg";
import ToSpecificationImage from "%public/static/vectors/principles/to-specification.svg";
import ToSatisfactionImage from "%public/static/vectors/principles/to-satisfaction.svg";
import MaintainableImage from "%public/static/vectors/principles/maintainable.svg";
import SecurelyImage from "%public/static/vectors/principles/securely.svg";
import EthicallyImage from "%public/static/vectors/principles/ethically.svg";
import RobustImage from "%public/static/vectors/principles/robust.svg";

import styles from "./styles.module.scss";

export const AboutProfile = (): JSX.Element => (
  <Group>
    <TitlePartial image="/static/images/about/profile/photo@4x.jpg">
      <h1>About Bash</h1>
      <p>
        My core principles for successfully delivering creative software
        applications
      </p>
    </TitlePartial>

    <ul className={styles.Principles}>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>On-time</h3>
          <OnTimeImage />
          <p>
            Committed to delivering a resolved product to an
            agreed&nbsp;schedule
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>Within budget</h3>
          <WithinBudgetImage />
          <p>
            Because all financial investments are a risk, there needs to be a
            responsibility to&nbsp;deliver
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>To specification</h3>
          <ToSpecificationImage />
          <p>
            Producing exactly what everyone agrees to the highest
            possible&nbsp;standards
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>To satisfaction</h3>
          <ToSatisfactionImage />
          <p>
            Software is designed for people, so let&apos;s put a&nbsp;smile on
            our client&apos;s customers&apos;&nbsp;faces
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>Maintainable</h3>
          <MaintainableImage />
          <p>
            Everyone who works on the project also has to fall in love with the
            code&nbsp;too
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>Securely</h3>
          <SecurelyImage />
          <p>
            No client wants media attention for the wrong reasons, especially
            because of your&nbsp;work
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>Ethically</h3>
          <EthicallyImage />
          <p>
            Projects must increase the quality of life for all&nbsp;stakeholders
          </p>
        </RichTextFormatter>
      </li>
      <li>
        <RichTextFormatter className={styles.Cell}>
          <h3>Robust</h3>
          <RobustImage />
          <p>
            Responsible testing methodologies accompanied with continuous
            integration and automated&nbsp;deployment
          </p>
        </RichTextFormatter>
      </li>
    </ul>
  </Group>
);
