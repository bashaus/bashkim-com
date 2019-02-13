import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { likeRalph as caseStudy } from 'data/caseStudies';

export default function LikeRalphCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Promote Disney's new film Wreck&mdash;It&nbsp;Ralph on social media channels
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Prize giveaway through a lucky-dip game mechanic allowing people who Like Ralph to win Disney Merchandise
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Facebook application which allowed people to smash a brick to win a prize
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>facebook.com: Like Ralph</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              Wreck-It Ralph<br />
              <a href="http://disney.co.uk/">Disney</a>
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
              <li>Belgium</li>
              <li>France</li>
              <li>Netherlands</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Children (13+)</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2011-05-22">22 May 2011</time>
              to<br />
              <time dateTime="2011-11-01">01 November 2011</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>1.3M people Liked&nbsp;Ralph</li>
              <li>16,422 bricks were wrecked</li>
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
            <h3>Facebook page</h3>
            <p>
              Ralph doesn't want to be a video-game villain anymore, he wants you to like him. So Agency Republic created ... Like Ralph: to get Ralph some new friends.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/like-ralph/photos/001.jpg" alt="Like Ralph at the beginning of the campaign" />
          </div>
        </figure>
      </section>

      <section className="group-alternate">
        <figure className="layout-captioned">
          <figcaption>
            <h3>Game board</h3>
            <p>
              Select a brick to wreck - but you have to be quick, other people are wrecking bricks in real time right in front of you!
            </p>

            <p>
              Once many bricks have been broken, the wall reveals a giant picture of Ralph.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/like-ralph/photos/002.jpg" alt="Like Ralph during the campaign" />
          </div>
        </figure>
      </section>

      <section className="group">
        <figure className="layout-captioned">
          <figcaption>
            <h3>Prizes</h3>
            <p>
              Some lucky visitors found prizes hidden behind the brick they wrecked.
            </p>
          </figcaption>

          <div className="layout-captioned--content">
            <img src="/static/images/caseStudies/like-ralph/photos/003.jpg" alt="Popup designed when a prize is won" />
          </div>
        </figure>
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
            <strong>Tom Cole</strong><br />
            Head of Technology
          </li>
          <li>
            <strong><a href="https://bluefuton.com/">Chris Rosser</a></strong><br />
            Senior Developer
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Creative Technologist
          </li>
          <li>
            <strong><a href="http://www.tmasz.com/">Tomasz Szarzynski</a></strong><br />
            Developer
          </li>
          <li>
            <strong><a href="http://thealscott.co.uk/">Al Scott</a></strong><br />
            Developer
          </li>
          <li>
            <strong><a href="http://www.marcindominas.com/">Marcin Dominas</a></strong><br />
            Developer
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
            <strong>Nic Goodall</strong><br />
            Quality Assurance
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
