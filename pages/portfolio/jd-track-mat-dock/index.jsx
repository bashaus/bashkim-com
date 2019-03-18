import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

import { jdTrackMatDock as caseStudy } from 'data/caseStudies';

export default function JdTrackMatDockCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Raise awareness of the brand's Rock'n'Roll heritage, which was only known by half their core target market
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Develop a product to showcase bands and their songs
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A hand-crafted JD barrel which plays band music
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
              <a href="http://www.brown-forman.com/">Brown-Forman</a>
              with<br />
              <a href="https://www.jackdaniels.com/">Jack&nbsp;Daniel's</a>

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
              <li>19-29 year olds</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2013-10-01">01 October 2013</time>
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
              v="2wW5ecsIg2Y"
              title="JD Track Mat Dock - Campaign video"
            />
          )}
        >
          <h3>Concept</h3>

          <p>
            For an overview of this campaign.
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
              src="/static/images/caseStudies/jd-track-mat-dock/photos/005.jpg"
              alt="The JD Track Mat Dock"
            />
          )}
        >
          <h3>Tangible tunes</h3>
          <p>
            To help Jack Daniel&apos;s celebrate bands returning to their hometown for an
            unforgettable gig, Agency Republic designed and produced the JD Track Mat Dock.
          </p>
          <p>
            Made from a mini Jack Daniel&apos;s barrel, the dock jams the band&apos;s tunes when
            you insert a track mat into the dock.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-track-mat-dock/photos/002.jpg"
              alt="Interacting with the dock"
            />
          )}
        >
          <h3>Interaction</h3>
          <p>
            The track mats are inserted into the side of the JD track mat dock which then plays the band's song.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-track-mat-dock/photos/001.jpg"
              alt="Face designs of the available Track Mats"
            />
          )}
        >
          <h3>Great Bands</h3>
          <p>
            The JD track mat dock formed part of the JD track mat campaign where over 1000 drink mats were distributed around the UK. With these mats, you can download music from local bands to your phone.
          </p>

          <p>
            The first three featured bands:
          </p>

          <ul>
            <li>
              <a href="https://www.facebook.com/Loomband">Loom</a>
              - Acid King City
            </li>
            <li>
              <a href="https://www.facebook.com/StoryBooksBand">Story books</a>
              - Simple Kids
            </li>
            <li>
              <a href="https://www.facebook.com/SWIMDEEPUK">Swim deep</a>
              - Simmer
            </li>
          </ul>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-track-mat-dock/photos/004.jpg"
              alt="Rear design of the available Track Mats"
            />
          )}
        >
          <h3>Campaign</h3>

          <p>
            The product supported the
            <a href="/portfolio/jd-roots/">JD Roots campaign</a>.
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
            <strong><a href="http://michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
          </li>
          <li>
            <strong><a href="http://www.heikowinter.com/">Heiko Winter</a></strong><br />
            Designer
          </li>
          <li>
            <strong><a href="http://www.thegraphicalbaker.com/">Huda Abdul Aziz</a></strong><br />
            Designer
          </li>
          <li>
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Creative Technologist
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
