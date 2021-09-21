import {
  Group,
  PartialFullText,
  PartialHeaderText,
  PartialSubtitle,
} from "@bashkim-com/design-system";

import { LayoutDefault } from "%components/LayoutDefault";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MetaDescription } from "%components/MetaDescription";
import { MetaTitle } from "%components/MetaTitle";

import styles from "./styles.module.scss";

const CookiePolicyPage = (): JSX.Element => (
  <LayoutDefault backButton={MenuBackButtonHomeImpl}>
    <MetaTitle content="Cookie policy" />
    <MetaDescription content="How your personal information is collected and used on this website" />

    <PartialHeaderText>
      <h1>Cookie policy</h1>
      <p>Because even a small website like this uses cookies</p>
    </PartialHeaderText>

    <Group>
      <PartialFullText>
        <p>
          This website sends and receives data (known as <em>cookies</em>) to
          help understand how you browse the site and deliver you the best
          possible experience. Cookies on this website are used to measure how
          you use the website so it can be improved with informed insights.
        </p>

        <p>
          No personally identifiable information is collected through the use of
          cookies on this site.
        </p>

        <p>
          More information about
          <a
            href="https://ico.org.uk/for-the-public/online/cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            how to manage cookies
          </a>
          can be found on the Information&nbsp;Commissioner&apos;s&nbsp;Office
          website.
        </p>
      </PartialFullText>

      <PartialSubtitle>
        <h2>How cookies are used on this website</h2>
      </PartialSubtitle>

      <PartialFullText>
        <h3>Google Analytics</h3>
        <p>
          This website implements Google Analytics to collect information about
          how you engage with the content. This is done to help inform decisions
          on making improvements for the site.
        </p>

        <p>Google Analytics stores information about:</p>

        <ul>
          <li>The pages you visit on this website;</li>
          <li>How long you spend on each page of this website;</li>
          <li>How you got to this website;</li>
          <li>What you click on while you&apos;re visiting this website.</li>
        </ul>

        <p>
          This information is collected anonymously. No personally identifiable
          information (for example your name or address) is collected or stored;
          so this information can not be used to identify you personally.
        </p>

        <p>Google Analytics sets the following cookies:</p>

        <table className={styles.CookieList}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Expires</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>_ga</th>
              <td>
                Helps count how many people visit this website by tracking if
                you&apos;ve visited before.
              </td>
              <td>2 years</td>
            </tr>
            <tr>
              <th>_gid</th>
              <td>
                Helps count how many people visit this website by tracking if
                you&apos;ve visited before.
              </td>
              <td>24 hours</td>
            </tr>
            <tr>
              <th>_gat</th>
              <td>
                Used to manage the rate at which page view requests are made.
              </td>
              <td>10 minutes</td>
            </tr>
          </tbody>
        </table>

        <p>
          The implementation of Google Analytics has been requested to anonymise
          your IP address to help protect your identity.
        </p>

        <p>
          If you prefer, you can{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            opt-out of Google Analytics
          </a>{" "}
          by following the instructions provided by Google.
        </p>

        <p>&nbsp;</p>

        <h3>YouTube</h3>

        <p>
          This website utilises the embedded player from YouTube to present
          video of work and associated artefacts.
        </p>

        <p>
          Requests made from this website specifically require YouTube to avoid
          using any session-based cookies which could identify you; and instead
          will only set functional cookies when required.
        </p>

        <p>&nbsp;</p>

        <p>Last updated 01 June 2018</p>
      </PartialFullText>
    </Group>
  </LayoutDefault>
);

export default CookiePolicyPage;
