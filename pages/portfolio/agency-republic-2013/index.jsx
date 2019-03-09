import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { agencyRepublic2013 as caseStudy } from 'data/caseStudies';

export default function AgencyRepublic2013CaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Develop a maintainable website to showcase the agency to potential clients and employees
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A content managed website built to promote the agency's new proposition
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A website built in Concrete5 to allow for easy maintenance
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>agencyrepublic.com</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              Agency Republic
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              Agency Republic<br />
              Senior Creative Technologist
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
              <li>Prospective clients</li>
              <li>Industry peers</li>
              <li>Prospective employees</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2013-05-22">22 May 2013</time>
              to
              <br />
              <time dateTime="2014-01-31">31 January 2014</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>
                <a href="https://econsultancy.com/blog/64236-10-responsive-digital-agency-websites">Featured on eConsultancy.com</a>
              </li>
            </ul>
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
              src="/static/images/caseStudies/agency-republic-2013/home/1024.png"
              alt="Agency Republic Homepage"
            />
          )}
        >
          <h3>Agency Proposition</h3>
          <p>
            In May 2013, Agency Republic launched its new proposition: What's&nbsp;next?.
          </p>

          <p>
            To accompany the proposition, the agency also launched a new website with new branding.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/agency-republic-2013/portfolio/1024.png"
              alt="Agency Republic Portfolio"
            />
          )}
        >
          <h3>Work page</h3>
          <p>
            The website was written in Concrete5 to allow for ease of maintenance by
            non-technical staff.
          </p>

          <p>
            New content can be added from the administration constrained to sit inside brand
            guidelines.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/agency-republic-2013/contact/1024.png"
              alt="Agency Republic Contact Page"
            />
          )}
        >
          <h3>Contact page</h3>
          <p>
            Complete with humorous directions to the office.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>Al Campbell</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong><a href="https://www.jamesandjason.co.uk/">Jason Keet</a></strong><br />
            Art Director
          </li>
          <li>
            <strong><a href="https://www.jamesandjason.co.uk/">James Hodson</a></strong><br />
            Copywriter
          </li>
          <li>
            <strong>Richard Templeman</strong><br />
            Head of Project Management
          </li>
          <li>
            <strong>Mark Andrews</strong><br />
            Senior Project Manager
          </li>
          <li>
            <strong><a href="http://michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
          </li>
          <li>
            <strong><a href="http://www.heikowinter.com/">Heiko Winter</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="http://www.potatomo.com/">Andy Cooper</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="http://matdenney.co.uk/">Mat Denney</a></strong><br />
            Creative Director
          </li>
          <li>
            <strong>Rachael Farrar</strong><br />
            Information Architect
          </li>
          <li>
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="http://www.bluefuton.com/">Chris Rosser</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Creative Technologist
          </li>
          <li>
            <strong><a href="http://www.ianculshaw.co.uk/">Ian Culshaw</a></strong><br />
            Developer
          </li>
          <li>
            <strong>Al Scott</strong><br />
            Developer
          </li>
          <li>
            <strong><a href="http://www.tmasz.com/">Tomasz Szarzynski</a></strong><br />
            Developer
          </li>
          <li>
            <strong>Victoria Copeman</strong><br />
            Quality Assurance
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
