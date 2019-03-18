import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

import { changeTheTune as caseStudy } from 'data/caseStudies';

export default function ChangeTheTuneCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Skip unpopular music on a communal playlist
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Create a fun way to skip songs on a shared stereo system
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A poster which advances a playlist when it's bumped
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
              <a href="http://spotify.tumblr.com/post/21266888895/hands-up-who-wants-this-for-their-office">Spotify</a><br />
              Research &amp; Development
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
              <li>United Kingdom (primary)</li>
              <li>Global (secondary)</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Offices &amp; workplaces</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2012-03-30">30 March 2012</time>
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
            <VideoPlayerYouTube
              v="uMy7m_QSpio"
              title="Change the Tune - Concept video"
            />
          )}
        >
          <h3>Concept</h3>
          <p>
            At Agency Republic, we have a shared stereo running Spotify in the office. Left to
            their own devices, 45&nbsp;people can choose some pretty interesting tunes and once in
            a while, it can get too much.
          </p>

          <p>
            So the Head of Design at Agency Republic came up with the
            Change&nbsp;The&nbsp;Tune poster.
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
              src="/static/images/caseStudies/change-the-tune/photos/003.jpg"
              alt="A preview of two posters produced"
            />
          )}
        >
          <h3>Poster Design</h3>

          <p>
            You put the poster on your wall and connect it to your computer. Screw up a piece of
            paper, throw it at the poster, and it&apos;ll automatically skip to the next track.
          </p>

          <p>
            The posters came in two designs, one developed for
            <a href="http://spotify.tumblr.com/post/21266888895/hands-up-who-wants-this-for-their-office">Spotify</a>
            and one with a Change the Tune design.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="http://www.michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
          </li>
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
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Creative Technologist
          </li>
          <li>
            <strong><a href="http://www.tmasz.com/">Tomasz Szarzynski</a></strong><br />
            Developer
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
