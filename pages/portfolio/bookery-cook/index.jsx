import React from 'react';

import CaseStudyCollaborators from 'components/CaseStudyCollaborators';
import CaseStudyDetails from 'components/CaseStudyDetails';
import CaseStudyTechnologies from 'components/CaseStudyTechnologies';
import LayoutCaseStudy from 'components/LayoutCaseStudy';
import PartialCaptioned from 'components/PartialCaptioned';
import PartialSubtitle from 'components/PartialSubtitle';

import { bookeryCook as caseStudy } from 'data/caseStudies';

export default function BookeryCookCaseStudy() {
  return (
    <LayoutCaseStudy caseStudy={caseStudy}>
      <section className="group">
        <CaseStudyDetails>
          <div>
            <h3>Brief</h3>
            <p>Create an innovative way to search and display recipes from a designer cookbook</p>
          </div>

          <div>
            <h3>Strategy</h3>
            <p>Use fridge magnets marked with ingredients as an interactive recipe-generating fridge</p>
          </div>

          <div>
            <h3>Implementation</h3>
            <p>An interactive fridge that reads fiducials and displays recipes</p>
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
              <a href="http://www.thebookerycook.com/">The Bookery Cook</a>
            </p>
          </div>

          <div>
            <h3>Agency</h3>
            <p>
              Studio&nbsp;Farrago<br />
              Creative&nbsp;Technologist
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
              <li>Household cooks</li>
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

      <section className="group">
        <PartialSubtitle>
          <h2>Artefacts</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <img
              src="/static/images/caseStudies/bookery-cook/slides/001.jpg"
              alt="The Bookery Cook"
            />
          )}
        >
          <h3>The Bookery Cook</h3>
          <p>
            The Bookery Cook is an interactive work that brings the household cookbook to life. The
            work extends itself beyond paper and places itself upon the hub of the home,
            the refrigerator.
          </p>

          <p>
            By drawing on the themes of the timeless family recipe book you are able to browse
            through recipes by matching ingredients together. Magnetic tiles marked with
            ingredients allow you to find a recipe based on a combination of ingredients.
          </p>
        </PartialCaptioned>
      </section>

      <section className="group">
        <PartialSubtitle>
          <h2>Exhibitions</h2>
        </PartialSubtitle>

        <ul className="layout-grid">
          <li>
            <h3>Pecha Kucha Brisbane</h3>
            <p>
              <time dateTime="2010-10-10">10 October 2010</time><br />
              State Library of Queensland<br />
              Brisbane, Australia
            </p>
            <p>
              <a href="http://pechakuchabrisbane.org/nights/21">View exhibition details</a>
            </p>
          </li>
          <li>
            <h3>SHOOT!</h3>
            <p>
              <time dateTime="2010-10-02">2 October 2010</time><br />
              4C Arts Collective<br />
              Brisbane, Australia
            </p>
          </li>
          <li>
            <h3>Inhabit Fiesta</h3>
            <p>
              <time dateTime="2010-06-25">25 June 2010</time><br />
              Glow 32<br />
              Brisbane, Australia
            </p>
          </li>
          <li>
            <h3>Shape of Things to Come</h3>
            <p>
              <time dateTime="2010-02">February 2010</time><br />
              <a href="http://www.ciprecinct.qut.edu.au/">QUT Creative Industries</a><br />
              Brisbane, Australia
            </p>
            <p>
              <a href="http://shape.qut.edu.au/students/2010/CIF">
                View exhibition details
              </a>
            </p>
          </li>
          <li>
            <h3>This Way Up</h3>
            <p>
              <time dateTime="2009-11-11">11 November 2009</time><br />
              <a href="http://www.ciprecinct.qut.edu.au/">QUT Creative Industries</a><br />
              Brisbane, Australia
            </p>
            <p>
              <a href="http://www.ciprecinct.qut.edu.au/whatson/archive/details.jsp?news-event-id=30414">
                View exhibition details
              </a>
            </p>
          </li>
        </ul>
      </section>

      <section className="group-alternate">
        <CaseStudyCollaborators>
          <li>
            <strong>Georgia Thompson</strong><br />
            Concept &amp; Design
          </li>
          <li>
            <strong><a href="https://www.bashkim.com/">Bashkim Isai</a></strong><br />
            Creative Technologist
          </li>
        </CaseStudyCollaborators>
      </section>
    </LayoutCaseStudy>
  );
}
