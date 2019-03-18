import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import DeviceSmartphone from '%components/DeviceSmartphone';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

import { ukBisNationalLivingWage as caseStudy } from 'data/caseStudies';

export default function UkBisNationalLivingWageCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Inform the public about the new National Living Wage
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Above-the-line campaign supported with digital delivery
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Maintainable single-page website
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>livingwage.co.uk</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.gov.uk/government/organisations/department-for-business-innovation-skills">
                Department for Business Innovation &amp; Skills
              </a>
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
              <li>25+ years olds</li>
              <li>Family businesses</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2015-11-27">27 November 2015</time>
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
            <VideoPlayerYouTube
              v="HmKh-mqLa3Q"
              title="National Living Wage - Campaign television ad"
            />
          )}
        >
          <h3>Communications</h3>
          <p>
            The National Living Wage campaign was formed to communicate the
            government&apos;s increase in the minimum wage from &pound;6.70/hour to
            &pound;7.20/hour.
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
              src="/static/images/caseStudies/uk-bis-national-living-wage/home/1024.png"
              alt="National Living Wage Homepage"
            />
          )}
        >
          <h3>Desktop</h3>
          <p>
            The website as presented to the user when they first visit the website.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <DeviceSmartphone image="/static/images/caseStudies/uk-bis-national-living-wage/home/320.png">
              Homepage on Mobile
            </DeviceSmartphone>
          )}
        >
          <h3>Mobile optimisation</h3>
          <p>
            The design of the site was kept minimalist to ensure it was compliant
            with government regulations and worked on a variety of devices.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <CaseStudyCollaborators>
          <li>
            <strong>Bashkim Isai</strong><br />
            Technical Consultant
          </li>
          <li>
            <strong>Jana Geary</strong><br />
            Programme Director
          </li>
          <li>
            <strong>Natalie Young</strong><br />
            Account Management
          </li>
          <li>
            <strong>Anshula Bichu</strong><br />
            Account Management
          </li>
          <li>
            <strong>Naomi Seah</strong><br />
            Designer
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
