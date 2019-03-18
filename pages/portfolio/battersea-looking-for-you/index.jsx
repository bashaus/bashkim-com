import React from 'react';

import CaseStudyAccolades from '%components/CaseStudyAccolades';
import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

import { batterseaLookingForYou as caseStudy } from 'data/caseStudies';

export default function BatterseaLookingForYouCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Increase the number of leads for Battersea Dogs &amp; Cats Home
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A stray dog looking for a home follows you around a shopping centre
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              RFID sensors detect when targeted users pass a digital outdoor screen and interrupt the current advertising to display a dog
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
              <li>lookingforyou.org.uk</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a
                href="https://www.battersea.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Battersea Dogs &amp; Cats Home
              </a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              <a
                href="http://ogilvyone.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                OgilvyOne WorldWide
              </a>
              <br />
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
              <li>Dog lovers</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2015-04-27">27 April 2015</time>
              to
              <br />
              <time dateTime="2015-05-06">06 May 2015</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>2,500 unique visits to the campaign microsite</li>
              <li>Over 320,000 video views</li>
              <li>99% positive social sentiment</li>
              <li>79% increase in main site traffic during the campaign from new visitors</li>
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

        <PartialCaptioned
          figure={(
            <VideoPlayerYouTube
              v="2CEo8If6rmQ"
              title="Battersea Dogs &amp; Cats Home - Campaign video"
            />
          )}
        >
          <h3>Concept</h3>

          <p>
            This campaign video was designed for distribution on social channels to broaden the audience reach of the event. It received over 320,000 video views during the campaign period.
          </p>
        </PartialCaptioned>

        <PartialCaptioned
          figure={(
            <VideoPlayerYouTube
              v="a-q_dnOErQY"
              title="Battersea Dogs &amp; Cats Home - Making-of video"
            />
          )}
        >
          <h3>Making-of video</h3>

          <p>
            Enter for the 2015 Cannes Lions International Festival of Creativity.
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
              src="/static/images/caseStudies/battersea-looking-for-you/home/1024.png"
              alt="The Looking for you campaign website"
            />
          )}
        >
          <h3>Campaign Website</h3>

          <p>
            Barley walks on screen and greets visitors by telling his story. The content encourages
            visitors to find out more information about the charity and provides a call to action
            to adopt or donate.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <div className="magazine">
              <div className="magazine--page">
                <img src="/static/images/caseStudies/battersea-looking-for-you/pamphlet/001.jpg" alt="Pamphlet Page One" />
              </div>

              <div className="magazine--page">
                <img src="/static/images/caseStudies/battersea-looking-for-you/pamphlet/002.jpg" alt="Pamphlet Page Two" />
              </div>

              <div className="magazine--page">
                <img src="/static/images/caseStudies/battersea-looking-for-you/pamphlet/003.jpg" alt="Pamphlet Page Three" />
              </div>

              <div className="magazine--page">
                <img src="/static/images/caseStudies/battersea-looking-for-you/pamphlet/004.jpg" alt="Pamphlet Page Four" />
              </div>
            </div>
          )}
        >
          <h3>Pamphlet handouts</h3>

          <p>
            We targeted the potential audience directly by distributing these RFID&#8209;enabled pamphlets. Visitors to the shopping centre would opt-in to the experience by accepting the collateral.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <CaseStudyAccolades accolades={caseStudy.accolades} />
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>Emma de la Fosse</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong>Charlie Wilson</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong>Arthur Parshotham</strong><br />
            Creative Director
          </li>
          <li>
            <strong>William Godfrey</strong><br />
            Concept Creator
          </li>
          <li>
            <strong>Jana Geary</strong><br />
            Digital Producer
          </li>
          <li>
            <strong>Beccy Juliusberger</strong><br />
            Business Director
          </li>
          <li>
            <strong>Nicole Yershon</strong><br />
            Director of Innovative Solutions
          </li>
          <li>
            <strong>Lorenzo Spadoni</strong><br />
            Creative Technologist
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong>Alison Cooper</strong><br />
            Film Producer
          </li>
          <li>
            <strong><a href="http://www.framestore.com/">Framestore</a></strong><br />
            Production
          </li>
          <li>
            <strong>Justin Cairns</strong><br />
            Print Production
          </li>
          <li>
            <strong><a href="https://www.real-digital.co.uk/">REAL Digital Prints</a></strong><br />
            Printers
          </li>
          <li>
            <strong>Milan Mladenovic</strong><br />
            <a href="http://www.exterionmedia.com/">Exterion Media</a><br />
            Digital Infrastructure Leader
          </li>
          <li>
            <strong>Tim Cartwright</strong><br />
            <a href="http://www.exterionmedia.com/">Exterion Media</a><br />
            Head of Digital Sales
          </li>
        </CaseStudyCollaborators>
      </section>

      { /*
      <script src="/assets/javascripts/libraries/turn/turn.min.js"></script>
      <script src="/assets/javascripts/magazine.js"></script>
      */ }
    </LayoutCaseStudy>
  );
}

