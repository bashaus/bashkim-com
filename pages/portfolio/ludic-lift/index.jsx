import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialFulltext from '%components/PartialFulltext';
import PartialSubtitle from '%components/PartialSubtitle';
import PartialVideoPlayerYouTube from '%components/PartialVideoPlayerYouTube';

import { ludicLift as caseStudy } from 'data/caseStudies';

export default function LudicLiftCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Change behaviours by encouraging people throughout the university to increase their physical activity
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              Encourage building visitors to utilise the stairs for short journeys instead of the elevator
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Retrofit an elevator with a personality which responds to its own usage and discourages lazy behaviour
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
            </ul>
          </div>

          <div>
            <h3>Institution</h3>
            <p>University of Queensland</p>
          </div>

          <div>
            <h3>Role</h3>
            <p>Team Leader</p>
          </div>

          <div>
            <h3>Markets</h3>
            <ul>
              <li>Australia</li>
            </ul>
          </div>

          <div>
            <h3>Audience</h3>
            <ol>
              <li>University Staff</li>
              <li>University Students</li>
            </ol>
          </div>

          <div>
            <h3>Lifespan</h3>
            <p>
              <time dateTime="2010-05-10">10 May 2010</time>
            </p>
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
              src="/static/images/caseStudies/ludic-lift/photos/001.png"
              alt="The Ludic Lift"
            />
          )}
        >
          <h3>Overview</h3>
          <p>
            The Ludic Lift project encompassed two elevators situated at the University of
            Queensland. The project altered the physical and acoustic experience of the elevators
            through two personas – Elevator Barbie and Elevator Ken.
          </p>

          <p>
            Depending on which level participants would enter on and the level they were travelling
            to, the lift would either praise or scorn the passengers for their choice to use the
            elevator over the stairs.
          </p>

          <p>
            If a person was to travel one floor (e.g.: from level 2 to level 3), Elevator Barbie
            would respond with something similar to: &quot;Ok, I&apos;ll take you up a level – but
            don&apos;t tell Elevator Ken we&apos;re having a one-floor stand&quot;. Contrariwise,
            Elevator Barbie would seem to bounce with glee and scream excitement when travelling
            6 floors (from level 1 to level 7) exclaiming &quot;We&apos;re going to Elevator
            Ken&apos;s Dream House – OMG OMG OMG!&quot;
          </p>

          <h3>Brief</h3>
          <p>
            The project being developed must encourage people to increase their physical activity
            when away from their office environment. Although the brief in its definition allowed
            for a vast amount of creative expression, it was clearly identified that the primary
            target audience should encompass staff and postgraduate students/residents and be
            situated within the university&apos;s campus.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <PartialVideoPlayerYouTube
              v="w2eUf_Jraxg"
              title="Ludic Lift - Lift usage research"
            />
          )}
        >
          <h3>Audience</h3>
          <p>
            In order to better understand lift and stair usage in the building, we pointed a
            camera at the most-used floor and the most-used stairway in the building. Our objective
            was to better understand how the lifts and stairs were used in the building.
          </p>

          <p>
            We also performed a user analysis by standing in the elevator and manually recording
            where people entered and exited the lift. We also identified whether their reason for
            using the elevators was legitimate (e.g.: long passage, heavy loads).
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialFulltext>
          <p>
            Our studies concluded that most elevator traffic was between level two and level three
            which caused the most congestion to the elevators.
          </p>

          <p>
            The installations&apos; aimed to alter the behaviour of people travelling between the
            second and fourth floor. We also made the assumption that with the constant praise of
            the lifts to those travelling to higher levels; they would be more welcoming of the
            lifts&apos; personalities.
          </p>

          <h3>Development</h3>
          <p>
            A lo-fidelity prototype was created using a simulated environment in Adobe Flash.
            The prototype allowed the testing of the interaction and the possible physical problems
            which could arise during implementation.
          </p>
          <p>
            However; due to a limited timeframe and delayed shipping, the total installation
            implementation time was 10 days; however the detailed specification for implementation
            allowed for a smooth construction and bump-in.
          </p>

          <cite>Video by Dean Jullie</cite>
        </PartialFulltext>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/ludic-lift/photos/002.jpg"
              alt="Photograph of the circuit which formed the Ludic Lift"
            />
          )}
        >
          <h3>Electronics</h3>
          <p>
            Hi-fidelity prototypes and calibration were completed in the elevator space. This
            proved difficult at times due to the limited space available and the requirement to
            ensure the elevator was not obstructing for its regular duties.
          </p>

          <p>
            Any work which was performed in the elevator was subject to a group member getting
            motion sickness. For this reason, work was tested before implementing in the
            environment.
          </p>

          <p>
            The implementation of the Ludic Lifts was expected to be in place for approximately
            5 days. Unfortunately, public response to retrofitting the elevator with a personality
            meant that the total lifespan of the project was 3&nbsp;hours.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/ludic-lift/photos/003.jpg"
              alt="Photograph of Bashkim Isai installing and calibrating the Ludic Lift"
            />
          )}
        >
          <h3>Outcomes</h3>
          <p>
            In the three hours of the installation&apos;s running lifespan, it was found that a
            large majority of people who resided on the third and fourth levels were actively
            engaging with the lifts as they wanted to experience what the system was designed
            for – despite being scorned for taking short elevator journeys.
          </p>

          <p>
            Top-floor residents were not welcoming of the lift personalities. While it was
            assumed that the major negative response of the elevators would be the content of
            the auditory feedback, most complaints stemmed from the visual appearance in the lift
            as &quot;the majority of the lift&apos;s functions were covered in Gaffa tape, which
            reduced the professional appearance of the lifts as a means of public
            transport&quot; [anonymous].
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialFulltext>
          <h3>Conclusion</h3>
          <p>
            Despite the number of responses from people who disliked the installation, the number
            of people who have praised the experience was far greater.
          </p>

          <p>
            Our analysis of the system re-enforced by the feedback received (both positive and
            negative) found that people were able to understand the concept of what the elevator
            personalities were attempting to encourage, despite their short deployment period.
          </p>

          <p>
            Retrofitting the elevator with a new voice provided for a different means of feedback,
            but did not change the understanding of how an elevator functioned.
          </p>

          <p>
            Although some people may not see a 3-hour deployment as successful, the objectives of
            the installation were fulfilled as the attitude towards utilising the lift for short
            journeys was changed.
          </p>
        </PartialFulltext>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Exhibitions</h2>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <h3>University of Queensland</h3>
            <time dateTime="2010-05-10">10 May 2010</time><br />
            St. Lucia Campus<br />
            Brisbane, Australia
          </li>
        </ul>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Team Leader
          </li>
          <li>
            <strong>Lisa Underhill</strong><br />
            Product Designer
          </li>
          <li>
            <strong>Dean Julie</strong><br />
            Product Designer
          </li>
          <li>
            <strong>Felicity Lupo</strong><br />
            Product Designer
          </li>
          <li>
            <strong>Matt Lewis</strong><br />
            Product Designer
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
