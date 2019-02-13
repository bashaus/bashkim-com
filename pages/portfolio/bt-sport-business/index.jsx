import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import DeviceSmartphone from 'components/DeviceSmartphone';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { btSportBusiness as caseStudy } from 'data/caseStudies';

export default function BtSportBusinessCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Support existing and encourage signup of new BT&nbsp;Sport Business customers
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Content managed website with pricing and up-to-date fixture information
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A WordPress website with strong visual imagery
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="https://btsportbusiness.com/">btsportbusiness.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://bt.com/">BT Group PLC</a><br />
              (British Telecommunications)
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              <a href="http://ogilvyone.co.uk/">OgilvyOne WorldWide</a><br />
              Senior Developer
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
              <li>Publicans</li>
              <li>Bar &amp; hotel managers</li>
              <li>CORCA Club managers</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2014-08-08">08 August 2014</time>
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
              src="/static/images/caseStudies/bt-sport-business/home/1024.png"
              alt="BT Sport Business"
            />
          )}
        >
          <h3>BT Sport proposition</h3>
          <p>
            After launching in 2013, BT&nbsp;Sport was looking for a way to better support existing
            customers and encourage new businesses to show sports in their establishment.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/bt-sport-business/fixtures/1280.png"
              alt="BT Sport Business"
            />
          )}
        >
          <h3>Fixtures</h3>
          <p>
            The back-end of the website allows administrators to keep an
            up-to-date table of fixtures which can be filtered to suit the needs
            of the consumer.
          </p>
          <p>
            This page ranked highly with search engines due to its structured
            data and visually appealing user interface.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <div className="carousel-init">
              <DeviceSmartphone image="/static/images/caseStudies/bt-sport-business/home/320.png">
                Homepage
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/bt-sport-business/fixtures/320.png">
                Upcoming Fixtures
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/bt-sport-business/faqs/320.png">
                Frequently Asked Questions
              </DeviceSmartphone>
            </div>
          )}
        >
          <h3>Mobile optimisation</h3>
          <p>
            The website was built in a mobile-first approach, ensuring that the
            mobile experience was optimised before developing
            larger screen implementations.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>John Streit</strong><br />
            Chief Technical Officer
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong>Daniel Tanner</strong><br />
            Front-end Developer
          </li>
          <li>
            <strong><a href="http://www.zerrenner.net/">Cleber Zerrenner</a></strong><br />
            Visual Designer
          </li>
          <li>
            <strong>Martin Bui</strong><br />
            Senior UX Architect
          </li>
          <li>
            <strong>Dale Kneen</strong><br />
            Content Strategist
          </li>
          <li>
            <strong>Charles Nartey</strong><br />
            Programme Director
          </li>
          <li>
            <strong>Michael Ozard</strong><br />
            Senior Digital Producer
          </li>
          <li>
            <strong>Daniel Grant</strong><br />
            Account Manager
          </li>
          <li>
            <strong>Alex Skeith</strong><br />
            Senior Quality Assurance
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
