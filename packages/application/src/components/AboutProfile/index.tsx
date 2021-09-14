import { Group, PartialTitle } from "@bashkim-com/design-system";

import styles from "./styles.module.scss";

export const AboutProfile = (): JSX.Element => (
  <Group>
    <PartialTitle image="/static/images/about/profile/photo@4x.jpg">
      <h1>About Bash</h1>
      <p>
        My core principles for successfully delivering creative software
        applications
      </p>
    </PartialTitle>

    <ul className={styles.Principles}>
      <li>
        <h3>On-time</h3>
        <img
          src="/static/vectors/principles/on-time.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Committed to delivering a resolved product to an agreed&nbsp;schedule
        </p>
      </li>
      <li>
        <h3>Within budget</h3>
        <img
          src="/static/vectors/principles/within-budget.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Because all financial investments are a risk, there needs to be a
          responsibility to&nbsp;deliver
        </p>
      </li>
      <li>
        <h3>To specification</h3>
        <img
          src="/static/vectors/principles/to-specification.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Producing exactly what everyone agrees to the highest
          possible&nbsp;standards
        </p>
      </li>
      <li>
        <h3>To satisfaction</h3>
        <img
          src="/static/vectors/principles/to-satisfaction.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Software is designed for people, so let&apos;s put a&nbsp;smile on our
          client&apos;s customers&apos;&nbsp;faces
        </p>
      </li>
      <li>
        <h3>Maintainable</h3>
        <img
          src="/static/vectors/principles/maintainable.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Everyone who works on the project also has to fall in love with the
          code&nbsp;too
        </p>
      </li>
      <li>
        <h3>Securely</h3>
        <img
          src="/static/vectors/principles/securely.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          No client wants media attention for the wrong reasons, especially
          because of your&nbsp;work
        </p>
      </li>
      <li>
        <h3>Ethically</h3>
        <img
          src="/static/vectors/principles/ethically.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Projects must increase the quality of life for all&nbsp;stakeholders
        </p>
      </li>
      <li>
        <h3>Robust</h3>
        <img
          src="/static/vectors/principles/robust.svg"
          alt=""
          width="50"
          height="50"
        />
        <p>
          Responsible testing methodologies accompanied with continuous
          integration and automated&nbsp;deployment
        </p>
      </li>
    </ul>
  </Group>
);
