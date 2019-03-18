import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import DeviceSmartphone from '%components/DeviceSmartphone';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';

import { saveHaggerstonPool as caseStudy } from 'data/caseStudies';

export default function SaveHaggerstonPoolCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Help the community group communicate and coordinate their effort to
              open the Haggerston Public Baths
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A content managed website which allows the community action group to
              post blog entries and describe the historical significance of
              the building
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A WordPress blog with a custom theme (based on the Bones template) and
              a number of custom-written and customised WordPress plugins
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>savehaggerstonpool.org.uk</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              Save Haggerston Pool Community Action Group
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              Freelance (Charity)<br />
              Developer &amp; Designer
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
              <li>Hackney Council mayoral election candidates</li>
              <li>Hackney Council residents</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2014-05-17">17 May 2014</time>
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
              src="/static/images/caseStudies/save-haggerston-pool/home/1024.png"
              alt="Save Haggerston Pool homepage"
            />
          )}
        >
          <h3>Community Group</h3>

          <p>
            Haggerston Pool, located in the London Borough of Hackney, was opened
            in 1904 but was closed and has remained derelict since February 2000.
            The Save Haggerston Pool community action group aims to reopen the
            baths to the public.
          </p>

          <p>
            The building boasts Grade II listing by the Victorian Society. It is
            listed as an Asset of Community Value (ACV) by Hackney Council
            in London.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/save-haggerston-pool/plan/1024.png"
              alt="Haggerston Pool architect's plan"
            />
          )}
        >
          <h3>Maintenance</h3>

          <p>
            To enable the community group to coordinate their campaign, the site is
            built on the WordPress content management system, enabling the site to be easily
            updated without technical intervention.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <div className="carousel-init">
              <DeviceSmartphone image="/static/images/caseStudies/save-haggerston-pool/home/320.png">
                Save Haggerson Pool homepage on mobile
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/save-haggerston-pool/plan/320.png">
                &quot;The plan&quot; page on smartphones
              </DeviceSmartphone>
            </div>
          )}
        >
          <h3>Responsive</h3>
          <p>
            Although a flat responsive design was not created, the template was
            implemented with a responsive front-end to enable the site to be
            visible on small screens.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>Nick Horne</strong><br />
            Art Director &amp; Copywriter
          </li>
          <li>
            <strong><a href="http://www.bertrandcarrara.com/">Bertrand Carrara</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Developer &amp; Designer
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
