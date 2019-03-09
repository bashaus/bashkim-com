import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';
import PartialVideoPlayerYouTube from 'components/PartialVideoPlayerYouTube';

import { jdRoots as caseStudy } from 'data/caseStudies';

export default function JdRootsCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Raise awareness of the brand&apos;s Rock&apos;n&apos;Roll heritage, which was only
              known by half their core target market
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A music platform that celebrates the importance of a band&apos;s roots
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Four gigs and an online microsite with each band showing off their hometowns
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>jdroots.co.uk</li>
            </ul>
            <p>Decommissioned</p>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://www.brown-forman.com/">Brown-Forman</a>
              with<br />
              <a href="https://www.jackdaniels.com/">Jack&nbsp;Daniel&apos;s</a>
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
              <li>19-29 year olds</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2012-03-22">22 March 2012</time>
              to
              <br />
              <time dateTime="2016-03-26">26 March 2016</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>Reached over 1,000,000 young drinkers.</li>
              <li>Over 70,000 went online to fight for just 1,200 tickets.</li>
              <li>
                88% of the target market that interacted with the campaign agreed
                Jack&nbsp;Daniel&apos;s has a strong association with music.
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
            <PartialVideoPlayerYouTube
              v="1rkUms08WwQ"
              title="JD Roots - Campaign video"
            />
          )}
        >
          <h3>Concept</h3>
          <p>
            You owe so much to your roots: so we put on homecoming gigs for four British bands to
            return to their stomping grounds, each supported by the Nashville-based group
            {' '}
            <a href="http://theblackbelles.com/">The Black Belles</a>
            .
          </p>

          <p>
            We took
            <a href="http://www.thecribs.com/">The&nbsp;Cribs</a>
            {', '}
            <a href="http://www.thehorrors.co.uk/">The&nbsp;Horrors</a>
            {' and '}
            <a href="http://music.twinatlantic.com/">Twin&nbsp;Atlantic</a>
            {' '}
            back to their hometowns to play three intimate gigs.
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
              src="/static/images/caseStudies/jd-roots/age-gate/1024.png"
              alt="Age gate"
            />
          )}
        >
          <h3>Age Gate</h3>
          <p>
            The content is not suitable for all audiences, so an age gate would ask you to verify
            before continuing to the site&apos;s content.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-roots/homepage/home-1200.jpg"
              alt="Homepage"
            />
          )}
        >
          <h3>Homepage</h3>
          <p>
            Fans competed for tickets on our website where they could also take a video tour of
            the bands&apos; hometowns.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-roots/homepage/horrors-1370.jpg"
              alt="Band-view page of JD roots"
            />
          )}
        >
          <h3>Band-view</h3>
          <p>
            When clicking on a band, the concertina would collapse the adjacent panels and expand
            out to preview the band.
          </p>
          <p>
            In partnership with NME, the highlighets were broadcast on Channel&nbsp;4, and all
            three gigs were live-streamed online via the JD&nbsp;Roots website.
          </p>
        </PartialCaptioned>

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/jd-roots/homepage/cribs-1200.jpg"
              alt="Age gate"
            />
          )}
        >
          <h3>Homepage of The Cribs</h3>
          <p>
            Each band in the concerntina had their own aesthetic to match their design.
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
            <strong><a href="https://www.jamesandjason.co.uk/">Jason Keet</a></strong><br />
            Art Director
          </li>
          <li>
            <strong><a href="https://www.jamesandjason.co.uk/">James Hodson</a></strong><br />
            Copywriter
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
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Creative Technologist
          </li>
          <li>
            <strong><a href="http://thealscott.co.uk">Al Scott</a></strong><br />
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
    </LayoutCaseStudy>
  );
}
