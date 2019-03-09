import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { purinaWeAreBakers as caseStudy } from 'data/caseStudies';

export default function PurinaWeAreBakersCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Inform owners about the benefits of feeding Bakers to their dogs
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p></p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p></p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="https://www.wearebakers.co.uk/">wearebakers.co.uk</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.purina.co.uk/">Purina</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              ETECTURE @ Ogilvy<br />
              Technical Consultant
            </p>
          </div>

          <div>
            <h3>Markets</h3>
            <ul>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li></li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime=""></time>
            </p>
          </div>
        </CaseStudyDetails>
      </section>

      <section className="group">
        <CaseStudyTechnologies technologies={caseStudy.technologies} />
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Artefacts</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/purina-we-are-bakers/home/1024.png"
              alt="We are Bakers"
            />
          )}
        >
          <h3>Homepage</h3>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Technical Consultant
          </li>
          <li>
            <strong>Naomi Seah</strong><br />
            Designer
          </li>
          <li>
            <strong>Francois Camilleri</strong><br />
            Project Management
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
