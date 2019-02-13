import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import DeviceSmartphone from 'components/DeviceSmartphone';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { vodafoneFreeSim as caseStudy } from 'data/caseStudies';

export default function VodafoneFreeSimCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Track and report on Vodafone's Free SIM distribution strategy in the UK
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Campaign management system to monitor the effectiveness of media placements
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              An online ordering website, management portal and display advertising aggregation platform
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>freesim.vodafone.co.uk</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="https://www.vodafone.co.uk/">Vodafone UK</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              Agency Republic<br />
              Creative Technologist
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
              <li>16-25 year olds</li>
              <li>International students</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2011-05-15">15 May 2011</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>Over 3.4M orders in 2 years</li>
              <li>81% uplift in click-to-order conversions through optimisation</li>
              <li>Highest Net Promoter Score (NPS) tracked by Vodafone UK</li>
            </ul>
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

        <div className="layout-grid layout-grid--count-3">
          <div>
            <a href="https://youtu.be/7_MjRwF1RCQ" data-peep="youtube-video">
              <img src="https://img.youtube.com/vi/7_MjRwF1RCQ/0.jpg" />
            </a>
          </div>

          <div>
            <a href="https://youtu.be/MOsE6z5z3Y0" data-peep="youtube-video">
              <img src="https://img.youtube.com/vi/MOsE6z5z3Y0/0.jpg" />
            </a>
          </div>

          <div>
            <a href="https://youtu.be/rzDELO4hXlE" data-peep="youtube-video">
              <img src="https://img.youtube.com/vi/rzDELO4hXlE/0.jpg" />
            </a>
          </div>
        </div>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Artefacts</h2>
        </PartialSubtitle>

        <figure className="layout-captioned">
          <figcaption>
            <h3>Campaign Management System</h3>
            <p>
              To support Vodafone's Free SIM operation, Agency Republic developed the Free SIM CMS, a system to manage the distribution of Vodafone Pay as you go SIM cards across the United Kingdom.
            </p>

            <p>
              The system tracks the effectiveness of advertising campaigns across media placements including:
            </p>

            <ul>
              <li>Free SIM website</li>
              <li>Display/banner ads</li>
              <li>Facebook</li>
              <li>Television</li>
              <li>Outdoor posters</li>
              <li>Affiliates</li>
              <li>Distributors</li>
            </ul>

            <p>
              Customers received their SIM card(s) within 72 hours (critical, as the quicker it arrives the more likely it is to be activated and topped up).
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/vodafone-free-sim/choice/desktop.png" alt="Launch webpage of the Vodafone Free SIM website" />
          </div>
        </figure>
      </section>

      <section className="group-alternate">
        <figure className="layout-captioned">
          <figcaption>
            <h3>Desktop interface</h3>
            <p>
              To highlight the different value propositions offered by Vodafone, users are presented with a choice page to help them select the most relevant product.
            </p>
            <p>
              This page was run through multi-variant testing and A/B testing to understand how different content (images, text, etc.) encouraged users to become customers.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/vodafone-free-sim/choice/multivariant.png" alt="An A/B test which was run on the Vodafone Free SIM website" />
          </div>
        </figure>
      </section>

      <section className="group">
        <figure className="layout-captioned">
          <figcaption>
            <h3>Placing an Order</h3>
            <p>
              Once a proposition has been selected, users can fill in their details to have a Vodafone Free SIM pre-provisioned with their proposition sent to them.
            </p>

            <p>
              The form page allows users to dynamically change the selected proposition and get more in-depth information about the offer.
            </p>

            <p>
              To increase order fidelity users can enter their postcode to search for their address rather than manually entering their address into the form. This significantly reduced the amount of SIM cards returned to Vodafone.
            </p>

            <p>
              Once a user enters their information they receive a confirmation email and their data is sent for cleansing and fulfilment.
            </p>

            <p>
              Despatch, activation and top-up information is sent from Vodafone and matched against orders to identify the effectiveness of their originating campaign.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/vodafone-free-sim/form/multivariant.png" alt="Vodafone Free SIM desktop form page" />
          </div>
        </figure>
      </section>

      <section className="group">
        <div className="layout-captioned">
          <div className="layout-captioned--summary">
            <h3>Adaptive Web Design</h3>
            <p>
              To deliver the best user experience, the Vodafone Free SIM website
              delivers a front-end interface optimised for the user's device through
              adaptive design&nbsp;techniques.
            </p>

            <p>
              A database of device capabilities (identified by the User Agent) would
              define whether a user experienced the smartphone or
              feature&nbsp;phone interface.
            </p>
          </div>

          <div className="layout-captioned--content">
            <div className="carousel-init">
              <DeviceSmartphone image="/static/images/caseStudies/vodafone-free-sim/choice/smartphone.png">
                Homepage for smartphones
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/vodafone-free-sim/form/smartphone.png">
                Smartphone page to order a SIM card
              </DeviceSmartphone>

              <DeviceSmartphone image="/static/images/caseStudies/vodafone-free-sim/choice/feature-phone.png">
                  Design for feature phones which do not support HTML5
                  (e.g.:&nbsp;Blackberry phones).
              </DeviceSmartphone>
            </div>
          </div>
        </div>
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
            <strong>Stephen Armstrong</strong><br />
            Client Services
          </li>
          <li>
            <strong>Lucy Fish</strong><br />
            Client Services
          </li>
          <li>
            <strong>Amanda Taylor</strong><br />
            Client Services
          </li>
          <li>
            <strong>Richard Templeman</strong><br />
            Head of Project Management
          </li>
          <li>
            <strong>Monica Ritz</strong><br />
            Project Management
          </li>
          <li>
            <strong>Mark Andrews</strong><br />
            Project Management
          </li>
          <li>
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="https://bluefuton.com/">Chris Rosser</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong><a href="http://www.tmasz.com/">Tomasz Szarzynski</a></strong><br />
            Developer
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Creative Technologist
          </li>
          <li>
            <strong><a href="http://www.michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
          </li>
          <li>
            <strong><a href="http://www.heikowinter.com/">Heiko Winter</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="https://www.thegraphicalbaker.com/">Huda Abdul Aziz</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="http://www.potatomo.com/">Andy Cooper</a></strong><br />
            Designer
          </li>
          <li>
            <strong>Nic Goodall</strong><br />
            Quality Assurance
          </li>
          <li>
            <strong>Victoria Copeman</strong><br />
            Quality Assurance
          </li>
        </CaseStudyCollaborators>
      </section>

      { /*
      {{ lightbox.javascripts() }}
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
