import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import DeviceSmartphone from 'components/DeviceSmartphone';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { niveaCrukSunburnRisk as caseStudy } from 'data/caseStudies';

export default function NiveaCrukSunburnRiskCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Help people be informed about the risks of sun damage
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Informs people about their local forecasted UV&nbsp;levels
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A mobile web application which retrieves the UV levels from the
              <a href="http://www.metoffice.gov.uk/">MET office</a>
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>nivea.com: sunburn risk</li>
            </ul>
          </div>

          <div>
            <h3>Clients</h3>
            <p>
              <a href="http://www.nivea.co.uk/">Nivea&nbsp;UK</a>
              in conjunction with
              <a href="http://www.cancerresearchuk.org/">Cancer&nbsp;Research&nbsp;UK</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              <a href="http://www.criticalmass.com">Critical Mass</a><br />
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
              <li>Mothers</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2014-06-01">1 June 2014</time>
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
            <div className="carousel-init">

              <DeviceSmartphone image="/static/images/caseStudies/nivea-cruk-sunburn-risk/home/320.png">
                Ask for the colour of the user&apos;s skin: pale skin is
                more susceptible to sun damage.
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/nivea-cruk-sunburn-risk/permission/320.png">
                Ask for the user&apos;s geographic location to identify the UV levels
                forecast for that day as published by the UK MET office.
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/nivea-cruk-sunburn-risk/result/320.png">
                Provides skin protection advice relevant to the individual.
              </DeviceSmartphone>
            </div>
          )}
        >
          <h3>Mobile web application</h3>
          <p>
            The application asks the user to identify the factors which can contribute to the risk
            of sun damage including:
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
            <strong>Tom Cole</strong><br />
            User Experience Design
          </li>
          <li>
            <strong>Kristel Cornell</strong><br />
            Creative
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
