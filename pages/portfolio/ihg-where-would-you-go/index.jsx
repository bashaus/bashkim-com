import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { ihgWhereWouldYouGo as caseStudy } from 'data/caseStudies';

export default function IhgWhereWouldYouGoCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Make IHG famous by increasing memberships
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Competition to win one of 1,000 free&nbsp;nights at any one of IHG's 4,700 hotels around the world
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A data capture form presented online and on a secure iPad at train stations around Europe
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
              <li>freenights.ihg.com</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://www.ihgplc.com/">InterContinental Hotels Group</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              <a href="http://ogilvyone.co.uk/">OgilvyOne WorldWide</a><br />
              Senior Web Developer
            </p>
          </div>

          <div>
            <h3>Markets</h3>
            <ul>
              <li>France</li>
              <li>Germany</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Business travellers</li>
              <li>Frequent travellers</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2014-10-01">01 October 2014</time>
              to
              <br />
              <time dateTime="2014-11-01">01 November 2014</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>30% engagement from non&#8209;members</li>
              <li>Average dwell time of 2.5&nbsp;minutes</li>
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

        <figure className="layout-captioned">
          <figcaption>
            <h3>Free nights campaign</h3>
            <p>
              To increase the number of memberships, InterContinental Hotels Group (IHG) gave away one of 1000 free nights at any one of their hotels worldwide.
            </p>

            <p>
              There are two ways to enter the competition - online and at special events around Europe.
            </p>

            <p>
              Entrants could enter their details on the IHG microsite for their chance to enter the competition.
            </p>

            <p>
              Once details were provided, 1000 random winners were chosen at the end of the campaign.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/ihg-where-would-you-go/website/desktop-home.png" alt="IHG Where would you go" />
          </div>
        </figure>
      </section>

      <section className="group-alternate">
        <figure className="layout-captioned">
          <figcaption>
            <h3>Physical installation</h3>
            <p>
              Installations were set up at three major train stations in Europe:
              <a href="https://www.google.co.uk/maps/place/St+Pancras+International/@51.531427,-0.126133,17z/data=!3m1!4b1!4m2!3m1!1s0x48761b3b8d98ed25:0xb92d6fcfa832dd12?hl=en">St.&nbsp;Pancras</a>
              in London,
              <a href="https://www.google.co.uk/maps/place/Gare+du+Nord/@48.8809481,2.3553137,17z/data=!3m1!4b1!4m2!3m1!1s0x47e66e6bfc58a37f:0x4fb63768d2dd790c?hl=en">Gare&nbsp;du&nbsp;Nord</a>
              in Paris and
              <a href="https://www.google.co.uk/maps/place/Berlin+Central+Station/@52.5250839,13.369402,17z/data=!3m1!4b1!4m2!3m1!1s0x47a851bdfbdfe77b:0x7a3c781495bcfcaa?hl=en">Hauptbahnhof</a>
              in&nbsp;Berlin.
            </p>

            <p>
              These installations were fitted with iPads, allowing members of the public to enter their details without the need for internet access.
            </p>

            <p>
              At the end of the day, the details would be synchronised to the main server via a REST-ful interface.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <div className="carousel-init">
              <div>
                <img src="/static/images/caseStudies/ihg-where-would-you-go/installation/st-prancras-2.jpg" alt="IHG Where would you go" />
              </div>

              <div>
                <img src="/static/images/caseStudies/ihg-where-would-you-go/installation/gare-du-nord.jpg" alt="IHG Where would you go" />
              </div>

              <div>
                <img src="/static/images/caseStudies/ihg-where-would-you-go/installation/st-prancras-1.jpg" alt="IHG Where would you go" />
              </div>
            </div>
          </div>
        </figure>
      </section>

      <section className="group">
        <figure className="layout-captioned">
          <figcaption>
            <h3>User Interaction</h3>

            <p>
              Whilst filling in the competition entry form, users could select their dream location which showed how many IHG hotels were located at that location.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/ihg-where-would-you-go/website/desktop-hotels.png" alt="IHG Where would you go" />
          </div>
        </figure>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Web Developer
          </li>
          <li>
            <strong>Charlie Francis</strong><br />
            Front-end Developer
          </li>
          <li>
            <strong>Alex Skeith</strong><br />
            Quality Assurance
          </li>
          <li>
            <strong>Francois Camilleri</strong><br />
            Project Management
          </li>
          <li>
            <strong>Marcus de Pfeiffer-Key</strong><br />
            Account Manager
          </li>
          <li>
            <strong>Mathew Hanson</strong><br />
            Account Executive
          </li>
        </CaseStudyCollaborators>
      </section>

      { /*
      {{ carousel.javascripts() }}
      <script>
        $(document).ready(function () {
          $('.carousel-init')
            .removeClass('carousel-init')
            .addClass('carousel')
            .owlCarousel({ nav: true, items: 1 });
        });
      </script>
      */ }
    </LayoutCaseStudy>
  );
}
