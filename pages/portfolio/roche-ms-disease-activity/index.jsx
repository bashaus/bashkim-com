import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

// import { rocheMsDiseaseActivity as caseStudy } from 'data/caseStudies';

export default function RocheMsDiseaseActivityCaseStudy() {
  return null;

  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Inform Health Care Practitioners (HCPs) about how to minimise the progression of disability in Multiple Sclerosis
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Infographic for launch at 1<sup>st</sup>
              Congress of the European&nbsp;Academy of Neurology
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              An animated infographic-driven web page describing disease&nbsp;activity in Multiple&nbsp;Sclerosis
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>msdiseaseactivity.com</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.roche.com/">Roche Pharmaceuticals</a>
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
              <li>Germany</li>
              <li>Spain</li>
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
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2015-06-20">20 June 2015</time>
              to<br />
              <time dateTime="2015-06-23">23 June 2015</time>
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
              src="/static/images/caseStudies/roche-ms-disease-activity/home/1024.png"
              alt="MS Disease Activity"
            />
          )}
        >
          <h3>Landing page</h3>
          <p>
            After confirming that the visitor is a Health Care Practitioner, the web page gives an overview of #msdiseaseactivity.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <VideoPlayerYouTube
              v="s-Lm6N-DmMQ"
              title="MS Disease Activity - Animation demo"
            />
          )}
        >
          <h3>Disease Activity</h3>
          <p>
            The infographics are animated as a user scrolls down the page.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Technical Consultant
          </li>
          <li>
            <strong>Paul Duncan</strong><br />
            Head of Design
          </li>
          <li>
            <strong>Chris Chappell</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong>Philippa McClure</strong><br />
            Account Management
          </li>
          <li>
            <strong>Andrew Davis</strong><br />
            Project Management
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
