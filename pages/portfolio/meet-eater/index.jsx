import React from 'react';

import CaseStudyCollaborators from '%components/CaseStudyCollaborators';
import CaseStudyDetails from '%components/CaseStudyDetails';
import CaseStudyTechnologies from '%components/CaseStudyTechnologies';
import LayoutCaseStudy from '%components/LayoutCaseStudy';
import PartialCaptioned from '%components/PartialCaptioned';
import PartialNewspaper from '%components/PartialNewspaper';
import PartialSubtitle from '%components/PartialSubtitle';
import VideoPlayerYouTube from '%components/VideoPlayerYouTube';

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
              <li>Peak of 9.8k Facebook fans</li>
              <li>International media attention</li>
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
            <VideoPlayerYouTube
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
            several social media news blogs and over 45 international news publications.
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

      <section className="group-alternate">
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

      <section className="group">
        <PartialSubtitle>
          <h2>Academic publication</h2>
        </PartialSubtitle>

        <PartialCaptioned
          figure={(
            <img
              alt="ACM Publication"
              src="/static/images/caseStudies/meet-eater/photos/acm-publication.jpg"
            />
          )}
        >
          <h3>OzCHI 2010</h3>
          <p>
            Association for Computing Machinery OzCHI&nbsp;2010 Conference
          </p>
          <p>
            <a href="https://espace.library.uq.edu.au/view/UQ:235091" target="_blank" rel="noopener noreferrer">
              Available via the University&nbsp;of&nbsp;Queensland
            </a>
          </p>
          <p>
            &quot;Meet Eater: Affectionate computing, social networks and
            human-plant interaction&quot;
          </p>
        </PartialCaptioned>
      </section>

      <section className="group-alternate">
        <PartialSubtitle>
          <h2>Media publications</h2>
          <p>
            A selection of articles published about the Meet&nbsp;Eater project
          </p>
        </PartialSubtitle>

        <PartialNewspaper>
          <li>
            <h3>Australia</h3>

            <p>
              <a href="https://www.facebook.com/media/set/?set=a.146052485411600.28047.125299544153561">MX Brisbane</a><br />
              I've planted myself on Facebook
            </p>

            <p>
              <a href="http://blogs.abc.net.au/queensland/2010/09/befriend-this-plant-on-facebook-or-it-will-die.html?site=brisbane&amp;program=612_breakfast">ABC 612 [Radio Interview]</a><br />
              Befriend this plant on Facebook or it will die
            </p>

            <p>
              <a href="http://www.abc.net.au/news/2010-09-15/plant-feeds-on-facebook-fans/2260512?section=justin">ABC News</a><br />
              Plant feeds on Facebook fans
            </p>
          </li>

          <li>
            <h3>United Kingdom</h3>
            <p>
              <a href="http://www.wired.co.uk/news/archive/2010-09/16/meet-eater-facebook-plant">Wired</a><br />
              Plant watered when it gets Facebook fans dies
            </p>

            <p>
              <a href="http://www.independent.co.uk/life-style/gadgets-and-tech/meet-eater-the-social-networking-plant-that-needs-your-friendship-to-grow-2068227.html">The Independent</a><br />
              Meet Eater, the social networking plant that needs your friendship to grow
            </p>

            <p>
              <a href="http://news.bbc.co.uk/1/hi/programmes/click_online/8964278.stm">BBC Click</a><br />
              Meet Eater Video [4:24-5:00]
            </p>

            <p>
              <a href="http://www.bbc.co.uk/mundo/ciencia_tecnologia/2010/09/100901_1448_planta_facebook_meereater_dc.shtml">BBC Mundo</a><br />
              La planta que es alimentada por Facebook
            </p>
          </li>

          <li>
            <h3>United States</h3>

            <p>
              <a href="http://www.allfacebook.com/facebook-meet-eater-2010-08">All Facebook</a><br />
              New Plant Relies On Facebook Interactions For Survival
            </p>

            <p>
              <a href="http://www.trendhunter.com/trends/meet-eater-plant">Trend Hunter</a><br />
              Social Media Sustenance &mdash; The Meet Eater Plant Survives on Social Interactions With Users
            </p>

            <p>
              <a href="http://mashable.com/2010/08/31/meet-eater-facebook/">Mashable</a><br />
              Meet the First Plant That Requires Facebook Fans to Survive
            </p>
          </li>

          <li>
            <h3>Canada</h3>

            <p>
              <a href="https://www.thestar.com/living/article/856474--garden-depends-on-facebook-fans-for-nourishment?bn=1">The Star</a><br />
              Garden depends on Facebook fans for nourishment
            </p>

            <p>
              <a href="http://www.yourhome.ca/homes/outdoorliving/gardeningandlandscaping/article/856474--garden-depends-on-facebook-fans-for-nourishment">Your Home</a><br />
              Garden depends on Facebook fans for nourishment
            </p>
          </li>

          <li>
            <h3>Singapore</h3>

            <p>
              <a href="http://www.straitstimes.com/BreakingNews/TechandScience/Story/STIStory_578809.html">Straits Times</a><br />
              FB-fed plant watered to death
            </p>

            <p>
              <a href="http://www.designtaxi.com/news/32871/In-Australia-a-Plant-Feeds-on-Facebook-Attention/?page=1">Design Taxi</a><br />
              In Australia, a Plant Feeds on Facebook Attention
            </p>
          </li>

          <li>
            <h3>Germany</h3>

            <p>
              <a href="http://www.yenodio.de/netzwelt/2010509/der-grune-facebook-daumen.html">Yenodio</a><br />
              Der gr&uuml;ne Facebook &mdash; Daumen
            </p>
            <p>
              <a href="http://www.techfieber.de/2010/09/05/meet-eater-facebook-pflanze-frisst-sich-fett-an-freunden/">TechFieber</a><br />
              Meet Eater: Facebook-Pflanze frisst sich fett an Freunden
            </p>
          </li>

          <li>
            <h3>Finland</h3>

            <p>
              <a href="http://www.ilkka.fi/Article.jsp?article=531705&amp;Title=Nettisympatia+tukahdutti+australialaiskasvin">Ilkka</a><br />
              Nettisympatia tukahdutti australialaiskasvin
            </p>

            <p>
              <a href="http://www.iltalehti.fi/digi/2010091512351474_du.shtml">Iltalehti</a><br />
              Facebook-ruokittu kasvi hoidetaan hengilt&auml;
            </p>
          </li>

          <li>
            <h3>Spain</h3>

            <p>
              <a href="http://baquia.com/actualidad/noticias/17042/una-planta-real-que-se-alimenta-gracias-a-facebook">Baquia</a><br />
              Una planta (real) que se alimenta gracias a Facebook
            </p>
          </li>

          <li>
            <h3>Indonesia</h3>

            <p>
              <a href="http://us.detikinet.com/read/2010/09/02/084350/1433247/398/meet-eater-tanaman-yang-butuh-cinta-dari-facebooker/?i991101105">Detikinet</a><br />
              Meet Eater, Tanaman yang Butuh Cinta dari Facebooker
            </p>
          </li>

          <li>
            <h3>Chile</h3>
            <p>
              <a href="http://www.tecnografo.com/noticias/la-primera-planta-que-requiere-de-fans-de-facebook-para-vivir/6048">TecnoGrafo</a><br />
              La primera planta que requiere de fans de Facebook para vivir
            </p>
          </li>

          <li>
            <h3>Brazil</h3>

            <p>
              <a href="http://noticias.r7.com/tecnologia-e-ciencia/noticias/planta-australiana-depende-de-fas-no-facebook-e-mensagens-para-sobreviver-20100901.html">R7</a><br />
              Planta australiana depende de f&atilde;s no Facebook e mensagens para sobreviver
            </p>
          </li>

          <li>
            <h3>Italy</h3>

            <p>
              <a href="http://www.jacktech.it/news/lifestyle-e-web/web/social-network-uomini-e-piante-possono-interagire-via-facebook">Jacktech</a><br />
              La pianta che vive sul social network
            </p>
          </li>

          <li>
            <h3>Czech Republic</h3>

            <p>
              <a href="http://www.zive.cz/bleskovky/meet-eater-rostlina-ktera-k-zivotu-potrebuje-vodu-ziviny-a-facebook/sc-4-a-153611/default.aspx">Zive</a><br />
              Meet Eater: rostlina, kter&aacute; k životu potřebuje vodu, živiny a Facebook
            </p>
          </li>

          <li>
            <h3>Poland</h3>

            <p>
              <a href="http://technologie.gazeta.pl/internet/1,104530,8322185,Roslina__ktora_rosnie_tylko_dzieki_Facebookowi.html">Gazeta</a><br />
              Roślina, kt&oacute;ra rośnie tylko dzięki Facebookowi
            </p>
          </li>

          <li>
            <h3>Russia</h3>

            <p>
              <a href="http://www.rian.ru/technology/20100901/271111370.html">РИА Новости</a><br />
              Появился сад, питающийся активностью пользователей Facebook
            </p>
          </li>
        </PartialNewspaper>
      </section>

      <section className="group">
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
