import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import DeviceSmartphone from 'components/DeviceSmartphone';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';
import PartialVideoPlayerYouTube from 'components/PartialVideoPlayerYouTube';

import { earlyTimesFireEater as caseStudy } from 'data/caseStudies';

export default function EarlyTimesFireEaterCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>Develop a website for the new Early Times alcoholic beverage</p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>A multi-lingual website with content separated back-end</p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>Laravel back-end with HTML5 front-end</p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="http://www.fireeater.com">fireeater.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://www.brown-forman.com/">Brown-Forman</a>
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
              <li>Poland</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>25-30 year olds</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2014-03-30">30 March 2014</time>
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
            <PartialVideoPlayerYouTube
              v="C-78weWJYPg"
              title="Fire Eater - Campaign video"
            />
          )}
        >
          <h3>Concept</h3>

          <p>
            Feel the spirit of Fire Eater.
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
              src="/static/images/caseStudies/early-times-fire-eater/age-gate/1024.png"
              alt="Fire Eater age gate"
            />
          )}
        >
          <h3>Are you old enough?</h3>
          <p>
            For legal reasons, visitors are first required to verify their age and country of
            residency to continue.
          </p>
          <p>
            The details are the verified against an API to ensure the user is legally able to
            view the website.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/early-times-fire-eater/home/1024.png"
              alt="Fire Eater homepage"
            />
          )}
        >
          <h3>Step right up</h3>
          <p>
            The Fire Eater homepage is designed to engage the user with the aesthetics of the brand.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <div className="carousel-init">
              <DeviceSmartphone image="/static/images/caseStudies/early-times-fire-eater/age-gate/320.png">
                Age Gate on smartphone
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/early-times-fire-eater/home/320.png">
                Fire Eater homepage on smartphone
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
            <strong>Al Campbell</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong><a href="http://jamesandjason.co.uk/">Jason Keet</a></strong><br />
            Art Director
          </li>
          <li>
            <strong><a href="http://jamesandjason.co.uk/">James Hodson</a></strong><br />
            Copywriter
          </li>
          <li>
            <strong><a href="http://g-and-d.squarespace.com/">Georgina Scollen</a></strong><br />
            Art Director
          </li>
          <li>
            <strong><a href="http://michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Creative Technologist
          </li>
          <li>
            <strong>Al Scott</strong><br />
            Front-end Developer
          </li>
          <li>
            <strong>Mark Andrews</strong><br />
            Senior Project Manager
          </li>
          <li>
            <strong>Alistair Millen</strong><br />
            Head of Planning
          </li>
        </CaseStudyCollaborators>
      </section>

      <section className="group">
        <div className="layout-cta">
          <p>Want to see the website live?</p>
          <a href="http://www.fireeater.com/">View the Fire Eater Website</a>
        </div>
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
