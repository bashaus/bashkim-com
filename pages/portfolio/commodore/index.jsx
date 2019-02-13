import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';
import PartialVideoPlayerYouTube from 'components/PartialVideoPlayerYouTube';

import { commodore as caseStudy } from 'data/caseStudies';

export default function CommodoreCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>
              Create a work which reflects your practice as a creative and a communication designer
            </p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>
              A real-time&nbsp;strategy two-player&nbsp;competitive tangible media implementation of Battleship
            </p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>
              Players seek and attack their enemies on a custom built tangible media installation
            </p>
          </div>

          <div>
            <h3>Deliverables</h3>
            <ul>
              <li>Design installation</li>
              <li>
                <a href="http://www.commodore-game.com/">commodore-game.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Institute</h3>
            <p>
              Queensland&nbsp;University of Technology
            </p>
          </div>

          <div>
            <h3>Degree</h3>
            <p>
              <a href="https://www.qut.edu.au/creative-industries">
                Bachelor of Creative&nbsp;Industries
              </a>
            </p>
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
              <li>Invited creative industries delegates</li>
              <li>Museum curators</li>
              <li>Children</li>
            </ol>
          </div>

          <div>
            <h3>Launched</h3>
            <p>
              <time dateTime="2009-11-11">11 November 2009</time>
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
            <PartialVideoPlayerYouTube
              v="1YGxvuDHC4M"
              title="Commodore @ This Way Up 2009"
            />
          )}
        >
          <h3>Concept</h3>

          <p>
            Commodore exposes the hidden realms of military tacticians by utilising a plotting
            table to simulate a naval battlefield.
          </p>

          <p>
            Players can command their fleet on the plotting table and watch the orders affected on
            the theatre of war.
          </p>

          <cite>
            Video by
            <a href="http://roboticmonsters.com/">Michael&nbsp;Rowe</a>
            and
            <a href="https://www.bashkim.com/">Bashkim&nbsp;Isai</a>
          </cite>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Artefacts</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/commodore/photos/001.jpg"
              alt=""
            />
          )}
        >
          <h3>Installation layout</h3>

          <p>
            Two players, Black (the Pirates) and White (the Establishment), compete against each
            other on individual physical plotting tables sharing a virtual naval battlefield.
          </p>

          <p>
            A player cannot see its opponent&apos;s plotting table; therefore they cannot peek at
            their opponent&apos;s strategy.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/commodore/photos/002.jpg"
              alt="The bell used to begin the game"
            />
          )}
        >
          <h3>Declaring war</h3>

          <p>
            Each player signifies their intent to begin playing by ringing their ship's bell, declaring war on their opponent.
          </p>

          <p>
            Traditionally, the colours Blue and Red are used to distinguish between two opposing factions in war. These colours originate from the Prussian military training system of
            <em>Kriegsspiel</em>
            (literally meaning &quot;war game&quot;) invented in 1812; however, Black was chosen to represent players as Pirates and White was chosen as a contrasting colour to represent the Establishment.
          </p>

          <p>
            This picture depicts the bell of the White player, standing on the side of the division where the White curtain is adorned.
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
              src="/static/images/caseStudies/commodore/photos/003.jpg"
              alt="The god-view of the battlefield"
            />
          )}
        >
          <h3>Gameplay</h3>

          <p>
            Each player commands a fleet of three ships with different abilities:
          </p>

          <ul>
            <li>
              <em>Blue:</em>
              extended projectile range, for attack
            </li>
            <li>
              <em>Red:</em>
              strong against attack, for defence
            </li>
            <li>
              <em>Yellow:</em>
              moves swiftly but weak, for scouting
            </li>
          </ul>

          <p>
            Each player&apos;s fleet is commanded on the naval battlefield by moving the physical
            ships on the plotting table. When so ordered, the virtual projection of the ship
            navigates to its instructed position using a
            {' '}
            <a href="https://en.wikipedia.org/wiki/Boids">Boids algorithm</a>
            .
          </p>

          <p>
            As a player navigates around the theatre of war, their movements reveal and retreat a
            fog&nbsp;of&nbsp;war; through this exploration, their opponent&apos;s location will
            become apparent.
          </p>

          <p>
            This screen depicts the perspective of the White player, their Blue ship is aligning
            broadsides with the opponent&apos;s Blue ship and the opponent&apos;s Red ship is
            peeking through the fog&nbsp;of&nbsp;war.
          </p>

          <p>
            The winner of the game is the player who sinks their opponent&apos;s Blue ship; much
            like checkmating a King in a game of Chess.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/commodore/photos/"
              alt=""
            />
          )}
        >
          <h3>Aesthetics</h3>

          <p>
            The installation draws on naval warfare strategy and visual aesthetics typical of the
            British&nbsp;Regency period (1811-1820).
          </p>

          <p>
            The plotting tables are constructed with stained wood to symbolise the hull of a ship.
            Brass instruments are used for the cannon triggers and as decorative features through
            the physical design.
          </p>

          <p>
            The virtual naval&nbsp;battlefield is represented with paper-style cartography, and
            cannonballs appear on the map as ink splatters when they miss their target.
          </p>

          <p>
            The strategy and design of the installation were inspired by artefacts from the
            <a href="http://www.maritimemuseum.com.au/">
              Queensland&nbsp;Maritime&nbsp;Museum
            </a>
            in Brisbane,&nbsp;Australia and the
            <a href="http://www.rmg.co.uk/national-maritime-museum">
              National&nbsp;Maritime&nbsp;Museum
            </a>
            in Greenwich,&nbsp;United&nbsp;Kingdom.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/commodore/photos/004.jpg"
              alt="Triggers for firing against opponents"
            />
          )}
        >
          <h3>Attacking</h3>

          <p>
            When two opposing ships align broadsides on the naval&nbsp;battlefield, a player can
            attack its foe by engaging the corresponding ships&apos; cannon trigger, situated on
            their side of the plotting table. This physical action produces a satisfying bang as
            feedback.
          </p>

          <p>
            Once a ship fires at its enemy, it must wait until the artillery has reloaded before
            it can fire again. A reloading ship has a doused LED.
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
              src="/static/images/caseStudies/commodore/photos/005.jpg"
              alt="Smoke billows from a weak ship"
            />
          )}
        >
          <h3>Feedback</h3>
          <p>
            As a ship is weakened in the game, smoke will begin to billow from its corresponding
            physical icon. This encourages the player to retreat and rethink their victory
            strategy.
          </p>

          <p>
            When your ship is crippled and can no longer be used, the main mast falls: signifying
            its demise.
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
            <h3>This Way Up</h3>
            <p>
              <time dateTime="2009-11-11">11 November 2009</time><br />
              <a href="http://www.ciprecinct.qut.edu.au/">QUT Creative Industries</a><br />
              Brisbane, Australia
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
            <strong>Avdyl Isai</strong><br />
            Carpentry
          </li>
          <li>
            <strong>Jane Turner</strong><br />
            Concept Development
          </li>
          <li>
            <strong><a href="http://kuuki.com.au/">Gavin Sade</a></strong><br />
            Concept Development
          </li>
          <li>
            <strong><a href="http://zefcan.com/">Zach Fitz-Walter</a></strong><br />
            Concept Development
          </li>
          <li>
            <strong>Noel Haynes</strong><br />
            Electronic Engineering
          </li>
          <li>
            <strong>Yasuhiro Santo</strong><br />
            Electronic Engineering
          </li>
          <li>
            <strong>Matt Squire</strong><br />
            Industrial Design
          </li>
          <li>
            <strong>Mark Barry</strong><br />
            3D Scanning &amp; Design
          </li>
          <li>
            <strong>Melissa Johnston</strong><br />
            Rapid Prototyping
          </li>
          <li>
            <strong><a href="http://roboticmonsters.com/">Michael Rowe</a></strong><br />
            Illustrations
          </li>
          <li>
            <strong><a href="http://www.jacqueprior.com/">Jacque Prior</a></strong><br />
            Photography &amp; Logo
          </li>
          <li>
            <strong>Kylie-Anne Schmidt</strong><br />
            Illustrations
          </li>
          <li>
            <strong>Cameron Owen</strong><br />
            Algorithm Development
          </li>
          <li>
            <strong>Glen Wetherall</strong><br />
            Technical Assistance
          </li>
          <li>
            <strong>Agim Isai</strong><br />
            IT Equipment
          </li>
          <li>
            <strong>Jon-Michael Mooney</strong><br />
            Composer &amp; Sampling
          </li>
        </CaseStudyCollaborators>
      </section>

      <section className="group">
        <div className="layout-cta">
          {/*
            <p>
              Technical information on the installation is available at the
              <a href="http://www.commodore-game.com/">Commodore</a> project.
            </p>
          */}
          <p>Want to see more information?</p>
          <a href="http://www.commodore-game.com/">View the Commodore Website</a>
        </div>
      </section>
    </LayoutCaseStudy>
  );
}
