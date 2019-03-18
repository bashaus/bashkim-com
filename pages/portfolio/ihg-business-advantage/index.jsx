import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';

import { ihgBusinessAdvantage as caseStudy } from 'data/caseStudies';

export default function IhgBusinessAdvantageCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Redesign IHG Business Advantage to a new style guide and increased media possibilities
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Implement a modern website design with a strong blog presence for fresh content
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              WordPress back-end with a clean hand-made front-end
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="https://www.businessadvantage.ihg.com/">businessadvantage.ihg.com</a>
              </li>
            </ul>
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
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Business Travellers</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2018-01-14">14 January 2018</time>
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
              src="/static/images/caseStudies/ihg-business-advantage/home/1024.png"
              alt="Screenshot of the IHG Business Advantage Homepage"
            />
          )}
        >
          <h3>Homepage</h3>

          <p>
            The homepage is designed to show the branding and describe the main product benefits
            to the audience.
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
            <strong>Steven Lee</strong><br />
            Project Manager
          </li>
          <li>
            <strong>Kerry Lee</strong><br />
            Designer
          </li>
          <li>
            <strong>Geoff Turner</strong><br />
            Art Director
          </li>
          <li>
            <strong>Victoria Hart</strong><br />
            Copywriter
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
