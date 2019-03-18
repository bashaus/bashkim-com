import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import DeviceSmartphone from '%components/DeviceSmartphone';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';

import { bmwCareerPortal as caseStudy } from 'data/caseStudies';

export default function BmwCareerPortalCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Showcase BMW as a first-class employer and display current opportunities
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Multi-lingual content-managed website integrated with internal HR systems
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Magnolia CMS website with a custom app integration with Taleo HR system
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>bmwgroup.jobs</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.bmw.com/">BMW</a>
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
              <li>Europe (primary)</li>
              <li>Global (secondary)</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Graduates</li>
              <li>Engineers</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2015-10-27">27 October 2015</time>
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
              src="/static/images/caseStudies/bmw-career-portal/country/1024.png"
              alt="BMW Careers Portal Country Selector"
            />
          )}
        >
          <h3>Country Selector</h3>
          <p>
            Upon first coming to the website, a user selects their country and specific sector of the BMW business which they would like to find out more&nbsp;information.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/bmw-career-portal/home/1024.png"
              alt="BMW Careers Portal Homepage"
            />
          )}
        >
          <h3>Homepage</h3>
          <p>
            The custom-built homepage for specific markets includes details about why BMW is a first-class employer, lists available positions, offices, opportunities and upcoming trade expo&nbsp;appearances.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/bmw-career-portal/location/1024.png"
              alt="BMW Careers Portal showcasing the Swindon plant"
            />
          )}
        >
          <h3>Location Information</h3>
          <p>
            Case studies for all of BMW&apos;s offices around the world were showcased on the
            careers portal&nbsp;website.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <div className="carousel-init">
              <DeviceSmartphone image="/static/images/caseStudies/bmw-career-portal/country/320.png">
                Country selection
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/bmw-career-portal/home/320.png">
                Homepage
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/bmw-career-portal/location/320.png">
                Location information
              </DeviceSmartphone>
            </div>
          )}
        >
          <h3>Mobile optimisation</h3>
          <p>
            The site was designed to be responsive and work across all
            modern devices.
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
            <strong>Chris Wintle</strong><br />
            Technical Lead
          </li>
          <li>
            <strong>John Ellison</strong><br />
            Project Management
          </li>
          <li>
            <strong>Craig Mullins</strong><br />
            Project Management
          </li>
          <li>
            <strong>Chris Bauer</strong><br />
            Technical Project Management
          </li>
          <li>
            <strong>Charlie Francis</strong><br />
            Senior Web Developer
          </li>
        </CaseStudyCollaborators>
      </section>

      { /*
      {{ carousel.javascripts() }}
      <script>
        (function ($) {
          $(document).ready(function () {
            $('.carousel-init').removeClass('carousel-init').addClass('carousel').owlCarousel({
              responsive: {
                0: {
                  items: 1,
                  mouseDrag: true,
                  touchDrag: true,
                  pullDrag: true,
                  freeDrag: true
                },

                480: {
                  items: 2,
                  mouseDrag: true,
                  touchDrag: true,
                  pullDrag: true,
                  freeDrag: true
                },

                1024: {
                  items: 3,
                  nav: false,
                  mouseDrag: false,
                  touchDrag: false,
                  pullDrag: false,
                  freeDrag: false
                }
              }
            });
          });
        })(jQuery);
      </script>
      */ }
    </LayoutCaseStudy>
  );
}
