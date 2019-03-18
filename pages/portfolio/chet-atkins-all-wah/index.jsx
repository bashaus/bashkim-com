import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

import { chetAtkinsAllWah as caseStudy } from 'data/caseStudies';

export default function ChetAtkinsAllWahCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              &quot;Do something amazing with a pair of Chuck&nbsp;Taylor All&nbsp;Stars, no rules, no guidelines, no limits&quot;
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Make the Chucks even more Rock 'n Roll by building-in a Wah-wah pedal
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A flex sensor acts as Wah-wah pedal for the Chuck Taylor sneakers
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://www.converse.com/">Converse</a>
              as part of<br />
              <a href="http://creativesocialblog.com/news/cscannes-converse-hack-a-chuck-collaboration">
                Creative Social #cscannes hack-a-chuck competition
              </a>
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
              <li>United Kingdom (primary)</li>
              <li>Global (secondary)</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Garage/rock music fans</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2013-06-14">14 June 2013</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>
                First place<br />
                <a href="http://creativesocialblog.com/publishing/cscannes-hack-a-chuck-competition-winner-announcement">#cscannes</a>
                competition
              </li>
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
              v="jR0GECjyKtk"
              title="Chet Atkins All Wah - Concept video"
            />
          )}
        >
          <h3>Competition submission</h3>
          <p>
            <a href="http://creativesocialblog.com/">Creative Social</a>
            , in collaboration with
            {' '}
            <a href="https://www.converse.com/">Converse</a>
            {' '}
            and
            {' '}
            <a href="https://www.google.com/intl/en/+/learnmore/">Google+</a>
            {' '}
            , ran the
            {' '}
            <a href="http://creativesocialblog.com/news/cscannes-converse-hack-a-chuck-collaboration">Hack-a-chuck</a>
            {' '}
            competition to inspire digital agencies around the world to create an inspiration
            product using a Converse sneaker.
          </p>

          <p>
            Agency Republic created the Chet Atkins All Wah, a guitar Wah-wah pedal build into the
            sole of a Converse Chuck Taylor All Star.
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
              src="/static/images/caseStudies/chet-atkins-all-wah/photos/001.jpg"
              alt="Bashkim Isai and Chris Rosser prototyping the Chet Atkins All Wah"
            />
          )}
        >
          <h3>In Development</h3>
          <p>
            Bashkim Isai (foreground), Chris Rosser (background) and Tom Cole (centre) test the
            internal electronics of the Chet Atkins All Wah.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/chet-atkins-all-wah/photos/002.jpg"
              alt="The Chet Atkins All Wah, complete with customised logo"
            />
          )}
        >
          <h3>How did we make it?</h3>
          <p>
            <a href="http://creativesocialblog.com/news/chet-atkins-all-wah-cscannes-hack-a-chuck-winner">
              Read the development story on the Creative&nbsp;Social blog
            </a>
            by Agency&nbsp;Republic&apos;s Executive Creative Director Al Campbell.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/chet-atkins-all-wah/photos/003.jpg"
              alt="Pete Boakes with the Chet Atkins All Wah"
            />
          )}
        >
          <h3>Rock on</h3>
          <p>
            Pete Boakes from the London band
            <a href="http://youngastronaut.co.uk/">Young&nbsp;Astronaut</a>
            playing his electric guitar with the Chet Atkins All Wah.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Exhibitions</h2>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <time dateTime="2013-11-25">25 November 2013</time><br />
            <p>London, United Kingdom</p>
            <a href="https://plus.google.com/+converse/posts/P8rUceigMWv">Converse #chuckhack</a>
            at<br />
            <a href="http://www.hoxtongallery.com/">Hoxton Gallery</a>
          </li>
        </ul>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>Al Campbell</strong><br />
            Executive Creative Director
          </li>
          <li>
            <strong><a href="http://www.potatomo.com/">Andy Cooper</a></strong><br />
            Original Concept
          </li>
          <li>
            <strong><a href="http://youngastronaut.co.uk/">Pete Boakes</a></strong><br />
            Guitarist
          </li>
          <li>
            <strong><a href="http://jamesandjason.co.uk/">Jason Keet</a></strong><br />
            Video production
          </li>
          <li>
            <strong><a href="http://jamesandjason.co.uk/">James Hodson</a></strong><br />
            Copywriter
          </li>
          <li>
            <strong><a href="http://michaelrobinson.info/">Michael Robinson</a></strong><br />
            Logo design
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Creative Technologist
          </li>
          <li>
            <strong>Tom Cole</strong><br />
            Fabrication
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
