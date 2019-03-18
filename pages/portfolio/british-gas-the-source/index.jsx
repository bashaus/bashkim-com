import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';

import { britishGasTheSource as caseStudy } from 'data/caseStudies';

export default function BritishGasTheSourceCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Increase consumer confidence in British&nbsp;Gas as an energy&nbsp;provider
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Social campaign supported by an online content hub showing how
              British&nbsp;Gas operates and helps communities
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Magnolia CMS-driven website to support an internal content team
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="https://www.britishgas.co.uk/the-source/">
                  britishgas.co.uk/the-source/
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.britishgas.co.uk/">British Gas</a>
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
              <li>Social media users</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2016-09-20">20 September 2016</time>
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
              src="/static/images/caseStudies/british-gas-the-source/article-moving/1024.png"
              alt="British Gas: The Source"
            />
          )}
        >
          <h3>Article</h3>
          <p>
            Articles were designed with a variety of different design possibilities - using the component-based system in the Magnolia&nbsp;CMS and design elements from Bootstrap's CSS framework.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/british-gas-the-source/grand-journey/1024.png"
              alt="British Gas: The Source"
            />
          )}
        >
          <h3>Journey</h3>
          <p>
            Some pages were custom-built and designed to visually engage the user while maintaining
            full CMS maintenance.
          </p>

          <p>
            This page describes Energy&apos;s Grand Journey to your home - and how British Gas
            delivers gas safely to your house.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img src="/static/images/caseStudies/british-gas-the-source/home/1024.png" alt="British Gas: The Source" />
          )}
        >
          <h3>Homepage</h3>
          <p>
            A list of the most recent articles. As the site was a targeted social campaign, the
            most emphasis was put on the article content.
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
            <strong>Robert Moore</strong><br />
            Project Management
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
