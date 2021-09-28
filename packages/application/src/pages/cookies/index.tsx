import {
  Group,
  PartialFullText,
  PartialHeaderImage,
} from "@bashkim-com/design-system";

import { Page } from "%components/Page";
import { MenuBackButtonHomeImpl } from "%components/MenuBackButtonHomeImpl";
import { MetaDescription } from "%components/MetaDescription";
import { MetaTitle } from "%components/MetaTitle";

import HeaderDesktopImage from "%public/static/images/cookies/header-desktop.jpg";
import HeaderMobileImage from "%public/static/images/cookies/header-mobile.jpg";

import styles from "./styles.module.scss";

const CookiesPage = (): JSX.Element => (
  <Page backButton={MenuBackButtonHomeImpl}>
    <MetaTitle content="Cookie policy" />
    <MetaDescription content="How your personal information is collected and used on this website" />

    <PartialHeaderImage
      id="CookiesPage-Header"
      imageDesktop={HeaderDesktopImage.src}
      imageMobile={HeaderMobileImage.src}
    />

    <Group>
      <PartialFullText>
        <h1>Cookie policy</h1>
        <p>
          This website sends and receives data (known as <em>cookies</em>) to
          understand how you browse the site and deliver the best possible
          experience. These cookies measure how you use the website to inform
          improvements with insights.
        </p>

        <p>
          No personally identifiable information is collected through the use of
          cookies on this site.
        </p>

        <p>
          More information about{" "}
          <a
            href="https://ico.org.uk/for-the-public/online/cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            how to manage cookies
          </a>{" "}
          can be found on the Information&nbsp;Commissioner&apos;s&nbsp;Office
          website.
        </p>

        <h2>How are cookies used on this website?</h2>

        <h3>Google Analytics</h3>
        <p>
          Google Analytics collects information about how you engage with this
          website; this informs decisions on making improvements for the site.
        </p>

        <p>Google Analytics stores information about:</p>

        <ul>
          <li>The pages you visit on this website;</li>
          <li>Time spent on each page of this website;</li>
          <li>How you got to this website;</li>
          <li>What you click on during your visit to this website.</li>
        </ul>

        <p>
          This information is collected anonymously and no personally
          identifiable information (e.g.: your name or address) is collected or
          stored.
        </p>

        <p>Google Analytics sets the following cookies:</p>

        <table className={styles.CookieList}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Purpose</th>
              <th>Lifetime</th>
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

        <h3>YouTube</h3>

        <p>
          This website utilises the embedded player from YouTube to present
          videos of work and associated artefacts.
        </p>

        <p>
          Requests made from this website specifically require YouTube to avoid
          using any session-based cookies which could identify you, and instead
          will only set functional cookies when required.
        </p>

        <hr />

        <p>
          <small>Last updated 22 September 2021</small>
        </p>
      </PartialFullText>
    </Group>
  </Page>
);

export default CookiesPage;
