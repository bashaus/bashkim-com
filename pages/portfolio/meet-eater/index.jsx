import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';
import PartialVideoPlayerYouTube from 'components/PartialVideoPlayerYouTube';

import { meetEater as caseStudy } from 'data/caseStudies';

export default function MeetEaterCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Entertain visitors and raise awareness of The&nbsp;Edge, a state-funded digital culture centre
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A garden that lives or dies depending on the amount of interaction it receives in person and on its Facebook page
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              The plants purr and croon when stroked, and are fed when a visitor posts on its Facebook wall
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
              <li>
                <a href="https://www.facebook.com/meeteater">facebook.com/meeteater</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Client</h3>
            <p>
              <a href="http://edgeqld.org.au/">The&nbsp;Edge</a>
              at the
              <a href="http://www.slq.qld.gov.au/">State&nbsp;Library of Queensland</a>
              in conjunction with the
              <a href="https://uq.edu.au">University&nbsp;of&nbsp;Queensland</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              Studio Farrago<br />
              Product Owner
            </p>
          </div>

          <div>
            <h3>Markets</h3>
            <ul>
              <li>Australia (primary)</li>
              <li>Global (secondary)</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>Brisbane digital natives</li>
              <li>International technology media</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2010-05-12">12 May 2010</time>
              to<br />
              <time dateTime="2010-11-26">26 November 2010</time>
            </p>
          </div>

          <div>
            <h3>Outcomes</h3>
            <ul>
              <li>Peak of 9.8k fans</li>
              <li>
                <a href="/blog/2010/11/meet-eater-articles/">International media attention</a>
              </li>
              <li>Increase in facility utilisation</li>
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

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/001.jpg"
              alt="The Meet Eater physical computing installation"
            />
          )}
        >
          <h3>Installation</h3>
          <p>
            The Meet Eater is a design provocation that encourages people to interact and engage
            with a Facebook page to sustain the life of a real garden of plants.
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/002.jpg"
              alt="The Meet Eater physical computing installation"
            />
          )}
        >
          <h3>Installation</h3>

          <p>
            By situating the garden to be a social actor in our lives, the installation explores
            whether it is possible to form an emotional attachment with non-human entities,
            particularly through the utilisation of online social networking services.
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/003.jpg"
              alt="Photograph of the Meet Eater's garden"
            />
          )}
        >
          <h3>Communication</h3>

          <p>
            The installation plays on the adage that plants respond to &quot;talk, attention, and affection&quot; which was popularised in recent times by one of the world's most prominent horticulturalists, Charles [Prince of Wales] who believes that talking to
            his plants encourages growth.
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/004.jpg"
              alt="Photograph of the Meet Eater's garden"
            />
          )}
        >
          <h3>Presence</h3>

          <p>
            A (thriving) pot plant can be re-visualised as an ambient display of its owners&apos;
            dedication to its development. A well-kept plant is more significant than a mere
            ornament for a household; it becomes mapped to its carer&apos;s sense of place
            and understood reality.
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/005.jpg"
              alt="A curious onlooker observes the Meet Eater"
            />
          )}
        >
          <h3>Exhibition</h3>

          <p>
            The installation was situated at
            <a href="http://edgeqld.org.au/diy-tech/meet-the-meet-eater-2">
              The Edge, a digital culture situated at the State Library of Queensland
            </a>
            for the majority of 2010 and presented as an installation at
            <a href="https://espace.library.uq.edu.au/view/UQ:235091">
              the OzCHI 2010 interaction design conference
            </a>
            in Brisbane, Australia.
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <PartialVideoPlayerYouTube
              v="-fc3h9_HdSg"
              title="Meet Eater - Time-lapse video"
            />
          )}
        >
          <h3>Outcome</h3>

          <p>
            The installation was re-planted with three iterations after drowning in a sea of love
            and water from an overwhelming amount of social interaction received online. While the
            former of the two deaths can be credited to over-stimulation and low watering
            thresholds, the latter death can be attributed to a substantial increase in the number
            of Facebook fans after the design intervention was published on
            <a href="/blog/2010/11/meet-eater-articles/">
              several social media news blogs and over 45 international news publications
            </a>
            .
          </p>

          <p>
            This time-lapse video shows the first iteration of the garden.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/meet-eater/photos/006.jpg"
              alt="Close-up of the Meet Eater Stencil Art"
            />
          )}
        >
          <h3>Documentation</h3>

          <p>
            The installation was designed and developed by Bashkim Isai as a collaborative effort
            between the State Library of Queensland and The Edge at the State Library
            of Queensland.
          </p>

          <p>
            Results of the design intervention formed the basis for the master thesis
            <em>Are we [here and] there yet? Exploring Online Profiles in Reality</em>
            ,
            <a
              href="https://espace.library.uq.edu.au/view/UQ:235091"
              target="_blank"
              rel="noopener noreferrer"
            >
              available via the University of&nbsp;Queensland
            </a>
            .
          </p>

          <cite>
            Photograph by
            <a href="http://www.jacqueprior.com/">Jacque Prior</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Exhibitions</h2>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <h3>The Edge</h3>
            <p>
              <time dateTime="2010-05-12">12 May 2010</time>
              to<br />
              <time dateTime="2010-11-21">21 November 2010</time><br />
              <a href="http://www.slq.qld.gov.au/">State Library of Queensland</a><br />
              Brisbane, Australia
            </p>
            <p>
              <a href="http://edgeqld.org.au/diy-tech/meet-eater/">
                View exhibition details
              </a>
            </p>
          </li>
          <li>
            <h3>OzCHI 2010</h3>
            <p>
              <time dateTime="2010-11-22">22 November 2010</time>
              to<br />
              <time dateTime="2010-11-26">26 November 2010</time><br />
              <a href="http://www.ozchi.org/2010/">OzCHI 2010</a><br />
              Brisbane, Australia
            </p>
            <p>
              22nd Conference of the Computer-Human Interaction Special Interest Group of Australia on Computer-Human Interaction
            </p>
            <p>
              <a href="https://espace.library.uq.edu.au/view/UQ:235091">
                View proceedings
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Product Owner
          </li>
          <li>
            <strong><a href="https://researchers.uq.edu.au/researcher/1060">Stephen Viller</a></strong><br />
            Academic Supervision
          </li>
          <li>
            <strong><a href="http://jacqueprior.com/">Jacque Prior</a></strong><br />
            Photography &amp; Logo Design
          </li>
          <li>
            <strong>Avdyl Isai</strong><br />
            Carpentry
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
