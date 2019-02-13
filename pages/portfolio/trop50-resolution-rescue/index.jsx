import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialSubtitle from 'components/PartialSubtitle';

import { trop50ResolutionRescue as caseStudy } from 'data/caseStudies';

export default function Trop50ResolutionRescueCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Raise awareness of the new Trop50 orange juice during winter when
              orange juice sales are at their lowest
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Generate a personalised video encouraging people to stick to their
              New Year's Resolutions
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              A custom workflow with moderation, video generation/upload and
              reply tweeting steps
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>
                <a href="https://twitter.com/search?q=%23resolutionrescue">#ResolutionRescue</a>
                campaign</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://trop50.co.uk">Pepsico Tropicana Trop50</a>
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
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Morning commuters</li>
              <li>Twitterists</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2014-01-01">01 January 2014</time>
              to
              <br />
              <time dateTime="2014-01-31">31 January 2014</time>
            </p>
          </div>

          {/*
            <div>
                <h3>Outcomes</h3>
                <ul>
                </ul>
            </div>
            */}
        </CaseStudyDetails>
      </section>

      <section className="group">
        <CaseStudyTechnologies technologies={caseStudy.technologies} />
      </section>

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>Campaign</h2>
          <p>
            To drive traffic to the campaign, sponsored tweets directed people to
            tweet their New Year's resolution with the hashtag #ResolutionRescue to
            win motivational tweets.
          </p>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <a data-peep="sponsored-tweet" href="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/001.png">
              <img src="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/001-thumb.png" alt="Sponsored Tweet" />
            </a>
          </li>
          <li>
            <a data-peep="sponsored-tweet" href="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/002.png">
              <img src="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/002-thumb.png" alt="Sponsored Tweet" />
            </a>
          </li>
          <li>
            <a data-peep="sponsored-tweet" href="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/003.png">
              <img src="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/003-thumb.png" alt="Sponsored Tweet" />
            </a>
          </li>
          <li>
            <a data-peep="sponsored-tweet" href="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/004.png">
              <img src="/static/images/caseStudies/trop50-resolution-rescue/sponsored-tweet/004-thumb.png" alt="Sponsored Tweet" />
            </a>
          </li>
        </ul>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>User Journey</h2>
        </PartialSubtitle>

        <div className="layout-grid">
          <div>
            <h3>Initial Tweet</h3>

            <p>
              Users tweet with the hashtag #ResolutionRescue, which is picked up via
              the Twitter Streaming API.
            </p>
          </div>

          <div>
            <h3>Human intervention</h3>

            <p>
              The tweet enters a moderation queue where it is filtered for profanity
              or use of trademarks.
            </p>

            <p>
              If approved, it is also classified into one of the following 12
              categories (such as cake, chocolate, etc.).
            </p>
          </div>

          <div>
            <h3>Video generation</h3>

            <p>
              A video is dynamically generated including the users' original tweet,
              their profile picture, a motivational message and a short animation
              encouraging the user to stick to their New Year's Resolution.
            </p>
          </div>

          <div>
            <h3>Tweet Response</h3>

            <p>
              The video is uploaded to YouTube and an automated tweet is sent to the
              user with the video embedded in to the tweet.
            </p>
          </div>
        </div>

        <PartialSubtitle>
          <h2>Artefacts</h2>
          <p>
            Video samples generated by the Trop50 Resolution Rescue campaign
          </p>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/oCj-HaL-tIg">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/cake.png" alt="Cake video" />
                <figcaption>Cake</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/g05N1spkbJk">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/chocolate.png" alt="Chocolate video" />
                <figcaption>Chocolate</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/c0UL4YmT2zM">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/couch.png" alt="Couch video" />
                <figcaption>Couch</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/Td64VsnC8vs">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/dancer.png" alt="Dancer video" />
                <figcaption>Dancer</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/rNuJArDcwEE">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/drinking.png" alt="Drinking video" />
                <figcaption>Drinking</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/IoHjj6vRVDg">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/going-out.png" alt="Going out video" />
                <figcaption>Going out</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/6hsnmkuFxuw">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/magazine.png" alt="Magazine video" />
                <figcaption>Magazine</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/Oy0GPvY9Ltc">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/mountain.png" alt="Mountain video" />
                <figcaption>Mountain</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/7KOj2vCfs8o">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/muffin.png" alt="Muffin video" />
                <figcaption>Muffin</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/YfVF0EmxHdQ">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/trainers.png" alt="Trainers video" />
                <figcaption>Trainers</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/3ZhXp3tlrCY">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/winner.png" alt="Winner video" />
                <figcaption>Winner</figcaption>
              </a>
            </figure>
          </li>
          <li>
            <figure className="caption">
              <a data-peep="youtube-video" href="https://youtu.be/SVleWS4HBGg">
                <img src="/static/images/caseStudies/trop50-resolution-rescue/thumbnails/yoga.png" alt="Yoga video" />
                <figcaption>Yoga</figcaption>
              </a>
            </figure>
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
            <strong>Stephen Armstrong</strong><br />
            Business Director
          </li>
          <li>
            <strong>Alistair Millen</strong><br />
            Strategy
          </li>
          <li>
            <strong>Mark Andrews</strong><br />
            Senior Project Manager
          </li>
          <li>
            <strong><a href="http://michaelrobinson.info/">Michael Robinson</a></strong><br />
            Head of Design
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
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Senior Creative Technologist
          </li>
          <li>
            <strong><a href="http://www.ianculshaw.co.uk/">Ian Culshaw</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong>Victoria Copeman</strong><br />
            Quality Assurance
          </li>
          <li>
            <strong>Iryna Svitlychenko</strong><br />
            QA Manager
          </li>
        </CaseStudyCollaborators>
      </section>

      { /*
      {{ lightbox.javascripts() }}
      */ }
    </LayoutCaseStudy>
  );
}
