import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import PartialVideoPlayerYouTube from '%components/PartialVideoPlayerYouTube';

import { huaweiRunImpossible as caseStudy } from 'data/caseStudies';

export default function HuaweiRunImpossibleCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Create excitement around the launch of the Huawei&nbsp;Watch&nbsp;2
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Allow health and fitness influencers, press and selected few try the Huawei&nbsp;Watch&nbsp;2 on a run
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Sign-up form for a chance to win a place in the #runimpossible event in Madrid and Milan
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>runimpossible.com</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://www.ihgplc.com/">InterContinental Hotels Group</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              <a href="https://www.hogarth-ogilvy.com/">Hogarth &amp; Ogilvy</a><br />
              Technical Lead
            </p>
          </div>

          <div>
            <h3>Markets</h3>
            <ul>
              <li>Italy</li>
              <li>Spain</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Health and fitness influencers</li>
              <li>Invited press</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2017-03-01">01 March 2018</time>
              to
              <br />
              <time dateTime="2017-08-01">01 August 2018</time>
            </p>
          </div>
        </CaseStudyDetails>
      </section>

      <section className="group">
        <CaseStudyTechnologies technologies={caseStudy.technologies} />
      </section>

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>Campaign</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <PartialVideoPlayerYouTube
              v="dMlHUpTxUc4"
              title="Huawei Run Impossible - Milan campaign video"
            />
          )}
        >
          <h3>Milan</h3>

          <p>
            Campaign video of the #runimpossible event in Milan, Italy.
          </p>
        </PartialCaptioned>

        <PartialCaptioned
          figure={(
            <PartialVideoPlayerYouTube
              v="2GOVeiSs-qc"
              title="Huawei Run Impossible - Madrid campaign video"
            />
          )}
        >
          <h3>Madrid</h3>

          <p>
            Campaign video of the #runimpossible event in Madrid, Spain.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Artefacts</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/huawei-run-impossible/home-en/1024.png"
              alt="Run Impossible English Homepage"
            />
          )}
        >
          <h3>Homepage</h3>
          <p>
            Campaign homepage
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/huawei-run-impossible/home-it/1024.png"
              alt="Run Impossible Italian Homepage"
            />
          )}
        >
          <h3>Translations</h3>
          <p>
            Campaign homepage translated into Italian.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Technical Lead
          </li>
          <li>
            <strong>Tim Scully</strong><br />
            Front-end Developer
          </li>
          <li>
            <strong><a href="https://www.decodeworldwide.com/">Danielle Mordini</a></strong><br />
            Translation
          </li>
          <li>
            <strong>Valentina Tottone</strong><br />
            Translation
          </li>
          <li>
            <strong>Craig Mullins</strong><br />
            Project Manager
          </li>
          <li>
            <strong>Grant Jenkins</strong><br />
            Client Services
          </li>
          <li>
            <strong>Malin Sonesson</strong><br />
            Client Services
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
